import "./style.css";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Alpine from "alpinejs";
import focus from "@alpinejs/focus";

window.Alpine = Alpine;

Alpine.plugin(focus);
Alpine.start();

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
