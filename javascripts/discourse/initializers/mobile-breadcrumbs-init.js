import { withPluginApi } from "discourse/lib/plugin-api";
import { inject as service } from "@ember/service";
import discourseComputed from "discourse-common/utils/decorators";

export default {
  name: "mobile-breadcrumbs-init",
  initialize() {
    withPluginApi("0.8.7", (api) => this.initWithApi(api));
  },

  initWithApi(api) {
    api.modifyClass("component:bread-crumbs", {
      pluginId: "mobile-breadcrumbs",
      router: service(),

      @discourseComputed("router.currentRouteName")
      hidden(currentRoute) {
        return this.site.mobileView && currentRoute === "discovery.categories";
      },
    });
  },
};
