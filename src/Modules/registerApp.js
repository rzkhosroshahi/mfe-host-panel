import loadComponent from './loadComponent';

export default function registerApp(appName, config, targetElement = '#vueExApp') {
    return {
        appName,
        data() {
            return {
                element: document.createElement('script'),
                appLoaded: false,
                mountApp: null,
                unMountApp: null,
                runningAppFailed: false,
            };
        },
        created() {
            this.loadApp();
        },
        beforeDestroy() {
            if (typeof this.unMountApp === 'function') {
                this.unMountApp();
            }
        },
        methods: {
            loadApp() {
                this.runningAppFailed = false;
                this.element.src = config.remoteUrl;
                this.element.type = 'text/javascript';
                this.element.async = true;

                this.element.onload = async () => {
                    try {
                        const module = await loadComponent(config.scope, config.module)();
                        const [MountApp, UnMountApp] = module.boot;
                        this.mountApp = MountApp;
                        this.unMountApp = UnMountApp;
                        this.appLoaded = true;
                        this.mountApp(targetElement);
                    } catch (ex) {
                        console.error(ex);
                        this.runningAppFailed = true;
                    }
                };
                this.element.onerror = () => {
                    this.runningAppFailed = true;
                };
                document.head.appendChild(this.element);
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
        `,
    };
}
