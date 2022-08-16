var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }), {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(new import_node.Response(body, {
          headers: responseHeaders,
          status: didError ? 500 : responseStatusCode
        })), pipe(body);
      },
      onShellError: (err) => {
        reject(err);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var React2 = __toESM(require("react")), import_react4 = require("@remix-run/react");

// app/utils/dates.ts
function formatDate(dateString) {
  let date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(date);
}

// app/core/ContentMetadata.tsx
function ContentMetadata({ createdAt, updatedAt }) {
  let created = formatDate(createdAt), updated = formatDate(updatedAt);
  return /* @__PURE__ */ React.createElement("div", {
    className: "contentMetadata grid-column-prose"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Outline, null, "Created"), " ", created), created === updated ? null : /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Outline, null, "Updated"), " ", updated));
}

// app/core/Link.tsx
var import_react2 = require("@remix-run/react");
function Link(_a) {
  var _b = _a, { children, className, external = !1, to } = _b, rest = __objRest(_b, ["children", "className", "external", "to"]);
  let classes = className ? `link ${className}` : "link";
  return external ? /* @__PURE__ */ React.createElement("a", {
    href: to,
    className: classes,
    target: "_blank",
    rel: "noopener noreferrer"
  }, children) : /* @__PURE__ */ React.createElement(import_react2.Link, __spreadValues({
    to,
    className: classes
  }, rest), children);
}

// app/core/Navbar.tsx
var import_react3 = require("react");
function Navbar() {
  let [theme, setTheme] = (0, import_react3.useState)("light");
  return (0, import_react3.useEffect)(() => {
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []), /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    "aria-label": "Back to home page"
  }, /* @__PURE__ */ React.createElement("img", {
    src: theme === "light" ? "/images/site-logo.svg" : "/images/site-logo-light.svg",
    alt: "",
    className: "navbar__logo"
  })));
}

// app/core/Outline.tsx
function Outline({ children }) {
  return /* @__PURE__ */ React.createElement("span", {
    className: "outline"
  }, children);
}

// app/styles/global.css
var global_default = "/build/_assets/global-NXIXWJQR.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-RYK4RZYH.css";

// app/styles/core.css
var core_default = "/build/_assets/core-HDODPIO4.css";

// app/root.tsx
var links = () => [
  { rel: "stylesheet", href: global_default },
  {
    rel: "stylesheet",
    href: dark_default,
    media: "(prefers-color-scheme: dark)"
  },
  { rel: "stylesheet", href: core_default }
];
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_react4.Outlet, null)));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React2.createElement("link", {
    rel: "icon",
    href: "https://mcgostisha.com/images/favicon.png"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_react4.Meta, null), /* @__PURE__ */ React2.createElement(import_react4.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_react4.Scripts, null), /* @__PURE__ */ React2.createElement(import_react4.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React2.createElement("div", {
    id: "root"
  }, /* @__PURE__ */ React2.createElement(Navbar, null), /* @__PURE__ */ React2.createElement("main", null, children));
}
function CatchBoundary() {
  let caught = (0, import_react4.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React2.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React2.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h1", null, "There was an error"), /* @__PURE__ */ React2.createElement("p", null, error.message), /* @__PURE__ */ React2.createElement("p", null, JSON.stringify(error)), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}

// app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => BlogPostRoute
});
function BlogPostRoute(props) {
  return /* @__PURE__ */ React.createElement("div", null, "Bam");
}

// app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogIndexRoute,
  links: () => links2,
  loader: () => loader,
  meta: () => meta
});
var import_react5 = require("@remix-run/react");

// app/styles/routes/blog.css
var blog_default = "/build/_assets/blog-2CHDAXI3.css";

// app/routes/blog/index.tsx
var links2 = () => [
  { rel: "stylesheet", href: blog_default }
], meta = () => ({
  title: "blog | mcgostisha",
  description: "Blogging about web development, engineering management, the NBA, and much more.",
  "og:title": "Blog",
  "og:description": "Blogging about web development, engineering management, the NBA, and much more.",
  "og:image": "https://mcgostisha.com/images/og-image-blog.png",
  "og:url": "https://mcgostisha.com/blog"
}), loader = async () => [];
function BlogItem({ post }) {
  let createdAt = formatDate(post.created_at), updatedAt = formatDate(post.updated_at);
  return /* @__PURE__ */ React.createElement("div", {
    className: "blogItem"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `${post.id}`
  }, post.title), /* @__PURE__ */ React.createElement("p", null, createdAt === updatedAt ? createdAt : `Written on ${createdAt}`), updatedAt === createdAt ? null : /* @__PURE__ */ React.createElement("p", null, `Last updated ${updatedAt}`));
}
function BlogIndexRoute() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "blog grid"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "grid-column-container"
  }, /* @__PURE__ */ React.createElement(Outline, null, "Blog")), /* @__PURE__ */ React.createElement("div", {
    className: "blog__list grid-column-container"
  }, data.length ? data.map((post) => /* @__PURE__ */ React.createElement(BlogItem, {
    key: post.id,
    post
  })) : /* @__PURE__ */ React.createElement("p", null, "coming soon")));
}

// app/routes/til/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => TILPostRoute,
  links: () => links3,
  loader: () => loader2
});
var import_react6 = require("@remix-run/react");

// app/til.tsx
var import_promises = __toESM(require("fs/promises")), import_path = __toESM(require("path")), import_front_matter = __toESM(require("front-matter")), import_tiny_invariant = __toESM(require("tiny-invariant")), import_marked = require("marked");
function isValidPostAttributes(attributes) {
  return attributes == null ? void 0 : attributes.title;
}
var tilPath = import_path.default.join(__dirname, "..", "content", "til");
async function getTILs() {
  try {
    let dir = await import_promises.default.readdir(tilPath);
    return { tils: (await Promise.all(dir.map(async (filename) => {
      let file = await import_promises.default.readFile(import_path.default.join(tilPath, filename)), { attributes } = (0, import_front_matter.default)(file.toString());
      return (0, import_tiny_invariant.default)(isValidPostAttributes(attributes)), __spreadValues({
        slug: filename.replace(/\.md$/, "")
      }, attributes);
    }))).sort((a, b) => a.created_at > b.created_at ? -1 : 1) };
  } catch (ex) {
    return { error: ex };
  }
}
async function getTIL(slug) {
  let file = await import_promises.default.readFile(import_path.default.join(tilPath, `${slug}.md`)), { attributes, body } = (0, import_front_matter.default)(file.toString());
  return (0, import_tiny_invariant.default)(isValidPostAttributes(attributes)), __spreadValues({
    slug,
    html: (0, import_marked.marked)(body)
  }, attributes);
}

// app/styles/routes/til.css
var til_default = "/build/_assets/til-5NB7C5IS.css";

// app/routes/til/$slug.tsx
var links3 = () => [
  { rel: "stylesheet", href: til_default }
], loader2 = async ({ params }) => params.slug ? getTIL(params.slug) : {};
function TILPostRoute(props) {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "tilSlug grid"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/til",
    className: "grid-column-container"
  }, "Back to TILs"), /* @__PURE__ */ React.createElement("h1", {
    className: "tilSlug__title grid-column-prose"
  }, data.title), /* @__PURE__ */ React.createElement(ContentMetadata, {
    createdAt: data.created_at,
    updatedAt: data.updated_at
  }), /* @__PURE__ */ React.createElement("div", {
    className: "tilSlug__content grid-column-prose",
    dangerouslySetInnerHTML: { __html: data.html || "" }
  }));
}

// app/routes/til/index.tsx
var til_exports = {};
__export(til_exports, {
  default: () => TILIndexRoute,
  links: () => links4,
  loader: () => loader3,
  meta: () => meta2
});
var import_react7 = require("@remix-run/react");
var links4 = () => [
  { rel: "stylesheet", href: til_default }
], meta2 = () => ({
  title: "til | mcgostisha",
  description: "Short snippets of content I've learned recently",
  "og:title": "TIL (Today I Learned)",
  "og:description": "Quick snippets of things I've learned recently.",
  "og:image": "https://mcgostisha.com/images/og-image-til.png",
  "og:url": "https://mcgostisha.com/til"
}), loader3 = async () => [];
function TILListItem({ til }) {
  function formatDate2(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(date);
  }
  let createdAt = formatDate2(new Date(til.created_at)), updatedAt = formatDate2(new Date(til.updated_at));
  return /* @__PURE__ */ React.createElement("div", {
    className: "til__listItem"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `${til.slug}`
  }, til.title), /* @__PURE__ */ React.createElement("p", null, createdAt === updatedAt ? createdAt : `Written on ${createdAt}`), updatedAt === createdAt ? null : /* @__PURE__ */ React.createElement("p", null, `Last updated ${updatedAt}`));
}
function TILIndexRoute(props) {
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "til grid"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "grid-column-container"
  }, /* @__PURE__ */ React.createElement(Outline, null, "T"), "oday ", /* @__PURE__ */ React.createElement(Outline, null, "I"), " ", /* @__PURE__ */ React.createElement(Outline, null, "L"), "earned"), /* @__PURE__ */ React.createElement("div", {
    className: "til__list grid-column-container"
  }, data.length ? data.map((til) => /* @__PURE__ */ React.createElement(TILListItem, {
    key: til.slug,
    til
  })) : /* @__PURE__ */ React.createElement("p", null, "coming soon!")));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5,
  meta: () => meta3
});

// app/styles/routes/index.css
var routes_default = "/build/_assets/index-5UMX2ZH7.css";

// app/routes/index.tsx
var links5 = () => [
  { rel: "stylesheet", href: routes_default }
], meta3 = () => ({
  title: "home | mcgostisha",
  description: "Homepage for Marty Gostisha",
  "og:title": "Marty Gostisha",
  "og:description": "About me, Blog, TIL and more",
  "og:image": "https://mcgostisha.com/images/og-image-default.png",
  "og:url": "https://mcgostisha.com",
  "og:type": "website",
  "twitter:card": "summary_large_image",
  "twitter:site": "@mg0stisha",
  "twitter:creator": "@mg0stisha"
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "index grid"
  }, /* @__PURE__ */ React.createElement("h1", null, "I'm ", /* @__PURE__ */ React.createElement(Outline, null, "Marty"), ", an engineer(ing manager)."), /* @__PURE__ */ React.createElement("p", null, "I lead the ", /* @__PURE__ */ React.createElement(Outline, null, "web product team"), " for ", /* @__PURE__ */ React.createElement(Link, {
    external: !0,
    to: "https://info.flip.com"
  }, "Flip"), " at ", /* @__PURE__ */ React.createElement(Link, {
    external: !0,
    to: "https://careers.microsoft.com/us/en/search-results?keywords=Flip"
  }, "Microsoft"), "."), /* @__PURE__ */ React.createElement("p", null, "I'm ", /* @__PURE__ */ React.createElement(Outline, null, "writing"), " on my ", /* @__PURE__ */ React.createElement(Link, {
    to: "blog"
  }, "blog"), "."), /* @__PURE__ */ React.createElement("p", null, "Sometimes I ", /* @__PURE__ */ React.createElement(Link, {
    external: !0,
    to: "https://twitter.com/mg0stisha"
  }, "tweet"), "."), /* @__PURE__ */ React.createElement("p", null, "I post snippets about what I'm ", /* @__PURE__ */ React.createElement(Outline, null, "learning"), " on ", /* @__PURE__ */ React.createElement(Link, {
    to: "til"
  }, "TIL"), "."), /* @__PURE__ */ React.createElement("p", null, "You can view my ", /* @__PURE__ */ React.createElement("del", null, "unfinished side projects"), " code on ", /* @__PURE__ */ React.createElement(Link, {
    external: !0,
    to: "https://github.com/mgostisha"
  }, "github"), "."), /* @__PURE__ */ React.createElement("p", null, "Feel free to send me an ", /* @__PURE__ */ React.createElement(Link, {
    external: !0,
    to: "mailto:martingostisha@gmail.com"
  }, "email"), "."));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9dba12c6", entry: { module: "/build/entry.client-TSXFAJSV.js", imports: ["/build/_shared/chunk-YGODGZC7.js", "/build/_shared/chunk-GWJFZCPI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VROGVPPX.js", imports: ["/build/_shared/chunk-J7AVF3TX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-PTWP7PKK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-ZTPSJ7E5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-R4ON4VD3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til/$slug": { id: "routes/til/$slug", parentId: "root", path: "til/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/til/$slug-W3GQBP6Z.js", imports: ["/build/_shared/chunk-FRBS2EJX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til/index": { id: "routes/til/index", parentId: "root", path: "til", index: !0, caseSensitive: void 0, module: "/build/routes/til/index-KQXC7LPA.js", imports: ["/build/_shared/chunk-FRBS2EJX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9DBA12C6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/til/$slug": {
    id: "routes/til/$slug",
    parentId: "root",
    path: "til/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/til/index": {
    id: "routes/til/index",
    parentId: "root",
    path: "til",
    index: !0,
    caseSensitive: void 0,
    module: til_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
