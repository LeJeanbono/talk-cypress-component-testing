import {defineConfig} from "cypress";
import {addMatchImageSnapshotPlugin} from "@simonsmith/cypress-image-snapshot";

export default defineConfig({
    component: {
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        setupNodeEvents(on) {
            addMatchImageSnapshotPlugin(on)
        },
    },
    e2e: {
        supportFile: false
    },
});
