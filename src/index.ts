import { app, oneWindow } from "@wxn0brp/zhiva-base-lib";

app.setVar("layout", "public/layout.html");
app.static("public");
app.static("dist");

oneWindow();