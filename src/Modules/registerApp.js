export default function (appName, loadApp, targetElement = '#vueExApp') {
    return {
        name,
        data() {
            return {
                appLoaded: false,
                mountApp: null,
                unMountApp: null,
                runningAppFailed: false,
            };
        },
        created() {
            this.loadApp()
        },
        beforeDestroy() {
            if (typeof this.unMountApp === 'function') {
                this.unMountApp();
            }
        },
        methods: {
            loadApp() {
                this.runningAppFailed = false;
                loadApp()
                    .then(({ boot: [MountApp, UnMountApp] }) => {
                        this.mountApp = MountApp;
                        this.unMountApp = UnMountApp;
                        this.appLoaded = true;
                        this.mountApp(targetElement);
                    })
                    .catch(() => {
                        this.runningAppFailed = true;
                    })
            },
            refreshPage() {
                window.location.reload();
            },
        },
        template: `
          <div v-if="appLoaded !== true">
              <div v-if="runningAppFailed">
                running ${appName} app has failed
                <button @click="refreshPage()">Refresh App!</button>
              </div>
              <div v-else>running ${appName} app</div>
          </div>
        `
    }
}
