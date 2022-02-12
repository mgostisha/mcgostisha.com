var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var React2 = __toModule(require("react"));
var import_remix3 = __toModule(require_remix());

// app/components/Navbar.tsx
init_react();
var import_react = __toModule(require("react"));

// app/core/index.ts
init_react();

// app/core/Link.tsx
init_react();
var import_remix2 = __toModule(require_remix());
function Link(_a) {
  var _b = _a, { children, className, external = false, to } = _b, rest = __objRest(_b, ["children", "className", "external", "to"]);
  const classes = className ? `link ${className}` : "link";
  if (external) {
    return /* @__PURE__ */ React.createElement("a", {
      href: to,
      className: classes,
      target: "_blank",
      rel: "noopener noreferrer"
    }, children);
  }
  return /* @__PURE__ */ React.createElement(import_remix2.Link, __spreadValues({
    to,
    className: classes
  }, rest), children);
}

// app/components/Navbar.tsx
function Navbar() {
  const [theme, setTheme] = (0, import_react.useState)("light");
  (0, import_react.useEffect)(() => {
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []);
  return /* @__PURE__ */ React.createElement("nav", {
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

// app/styles/global.css
var global_default = "/build/_assets/global-D2VUL2O7.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-RYK4RZYH.css";

// app/styles/core.css
var core_default = "/build/_assets/core-7P5Y7MIV.css";

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    },
    { rel: "stylesheet", href: core_default }
  ];
};
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_remix3.Outlet, null)));
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
    href: "/favicon.ico"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement("meta", {
    property: "og:title",
    content: "Marty Gostisha"
  }), /* @__PURE__ */ React2.createElement("meta", {
    property: "og:description",
    content: "About me, Blog, TIL and more"
  }), /* @__PURE__ */ React2.createElement("meta", {
    property: "og:image",
    content: "https://mcgostisha-com.pages.dev/images/og-image-default.png"
  }), /* @__PURE__ */ React2.createElement("meta", {
    property: "og:url",
    content: "https://mcgostisha.com"
  }), /* @__PURE__ */ React2.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /* @__PURE__ */ React2.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "twitter:site",
    content: "@mg0stisha"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "twitter:creator",
    content: "@mg0stisha"
  }), /* @__PURE__ */ React2.createElement(import_remix3.Meta, null), /* @__PURE__ */ React2.createElement(import_remix3.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React2.createElement(import_remix3.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React2.createElement("div", {
    id: "root"
  }, /* @__PURE__ */ React2.createElement(Navbar, null), /* @__PURE__ */ React2.createElement("main", null, children));
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)();
  let message;
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

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/blog.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  default: () => BlogPostRoute
});
init_react();
function BlogPostRoute(props) {
  return /* @__PURE__ */ React.createElement("div", null, "Bam");
}

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/til/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => TILPostRoute,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/til.tsx
init_react();
var import_promises = __toModule(require("fs/promises"));
var import_path = __toModule(require("path"));
var import_front_matter = __toModule(require("front-matter"));
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var import_marked = __toModule(require("marked"));
function isValidPostAttributes(attributes) {
  return attributes == null ? void 0 : attributes.title;
}
var tilPath = import_path.default.join(__dirname, "../../content/til");
async function getTILs() {
  const dir = await import_promises.default.readdir(tilPath);
  const tils = await Promise.all(dir.map(async (filename) => {
    const file = await import_promises.default.readFile(import_path.default.join(tilPath, filename));
    const { attributes } = (0, import_front_matter.default)(file.toString());
    (0, import_tiny_invariant.default)(isValidPostAttributes(attributes));
    const data = __spreadValues({
      slug: filename.replace(/\.md$/, "")
    }, attributes);
    return data;
  }));
  return tils.sort((a, b) => a.created_at > b.created_at ? -1 : 1);
}
async function getTIL(slug) {
  const file = await import_promises.default.readFile(import_path.default.join(tilPath, `${slug}.md`));
  const { attributes, body } = (0, import_front_matter.default)(file.toString());
  (0, import_tiny_invariant.default)(isValidPostAttributes(attributes));
  return __spreadValues({
    slug,
    html: (0, import_marked.marked)(body)
  }, attributes);
}

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/til/$slug.tsx
var loader = async ({ params }) => {
  console.log("PARAMS:", params);
  if (!params.slug)
    return {};
  return getTIL(params.slug);
};
function TILPostRoute(props) {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: data.html || "" }
  });
}

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/til/index.tsx
var til_exports = {};
__export(til_exports, {
  default: () => TILIndexRoute,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/components/Outline.tsx
init_react();
function Outline({ children }) {
  return /* @__PURE__ */ React.createElement("span", {
    className: "outline"
  }, children);
}

// app/styles/routes/til.css
var til_default = "/build/_assets/til-2NF47T4C.css";

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/til/index.tsx
var links2 = () => {
  return [
    { rel: "stylesheet", href: til_default }
  ];
};
var meta = () => {
  return {
    title: "til | mcgostisha",
    description: "Short snippets of content I've learned recently",
    "og:title": "TIL (Today I Learned)",
    "og:description": "Quick snippets of things I've learned recently.",
    "og:image": "https://mcgostisha-com.pages.dev/images/og-image-til.png",
    "og:url": "https://mcgostisha-com.pages.dev/til"
  };
};
var loader2 = async () => {
  return getTILs();
};
function TIL({ til }) {
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(date);
  }
  const createdAt = formatDate(new Date(til.created_at));
  const updatedAt = formatDate(new Date(til.updated_at));
  return /* @__PURE__ */ React.createElement("div", {
    className: "tilItem"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `${til.slug}`
  }, til.title), /* @__PURE__ */ React.createElement("p", null, createdAt === updatedAt ? createdAt : `Written on ${createdAt}`), updatedAt === createdAt ? null : /* @__PURE__ */ React.createElement("p", null, `Last updated ${updatedAt}`));
}
function TILIndexRoute(props) {
  const data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "til"
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement(Outline, null, "T"), "oday ", /* @__PURE__ */ React.createElement(Outline, null, "I"), " ", /* @__PURE__ */ React.createElement(Outline, null, "L"), "earned"), /* @__PURE__ */ React.createElement("div", {
    className: "til__list"
  }, data.length ? data.map((til) => {
    return /* @__PURE__ */ React.createElement(TIL, {
      key: til.slug,
      til
    });
  }) : /* @__PURE__ */ React.createElement("p", null, "coming soon")));
}

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links3,
  meta: () => meta2
});
init_react();

// app/styles/routes/index.css
var routes_default = "/build/_assets/index-IO2VCVPA.css";

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/index.tsx
var links3 = () => {
  return [
    { rel: "stylesheet", href: routes_default }
  ];
};
var meta2 = () => {
  return {
    title: "home | mcgostisha",
    description: "Homepage for Marty Gostisha"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "index"
  }, /* @__PURE__ */ React.createElement("h1", null, "I'm ", /* @__PURE__ */ React.createElement(Outline, null, "Marty"), ", an engineer(ing manager)."), /* @__PURE__ */ React.createElement("p", null, "I lead the ", /* @__PURE__ */ React.createElement(Outline, null, "web product team"), " for ", /* @__PURE__ */ React.createElement(Link, {
    external: true,
    to: "https://info.flipgrid.com"
  }, "Flipgrid"), " at ", /* @__PURE__ */ React.createElement(Link, {
    external: true,
    to: "https://careers.microsoft.com/us/en/search-results?keywords=Flipgrid"
  }, "Microsoft"), "."), /* @__PURE__ */ React.createElement("p", null, "I'm ", /* @__PURE__ */ React.createElement(Outline, null, "writing"), " on my ", /* @__PURE__ */ React.createElement(Link, {
    to: "blog"
  }, "blog"), "."), /* @__PURE__ */ React.createElement("p", null, "Sometimes I ", /* @__PURE__ */ React.createElement(Link, {
    external: true,
    to: "https://twitter.com/mg0stisha"
  }, "tweet"), "."), /* @__PURE__ */ React.createElement("p", null, "I post snippets about what I'm ", /* @__PURE__ */ React.createElement(Outline, null, "learning"), " on ", /* @__PURE__ */ React.createElement(Link, {
    to: "til"
  }, "TIL"), "."), /* @__PURE__ */ React.createElement("p", null, "You can view my ", /* @__PURE__ */ React.createElement("del", null, "unfinished side projects"), " code on ", /* @__PURE__ */ React.createElement(Link, {
    external: true,
    to: "https://github.com/mgostisha"
  }, "github"), "."), /* @__PURE__ */ React.createElement("p", null, "Feel free to send me an ", /* @__PURE__ */ React.createElement(Link, {
    external: true,
    to: "mailto:martingostisha@gmail.com"
  }, "email"), "."));
}

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogIndexRoute,
  links: () => links4,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/styles/routes/blog.css
var blog_default = "/build/_assets/blog-WNGWNMPC.css";

// route-module:/Users/martingostisha/Developer/personal/mcgostisha.com/app/routes/blog.tsx
var links4 = () => {
  return [
    { rel: "stylesheet", href: blog_default }
  ];
};
var meta3 = () => {
  return {
    title: "blog | mcgostisha",
    description: "Blogging about web development, engineering management, the NBA, and much more.",
    "og:title": "Blog",
    "og:description": "Blogging about web development, engineering management, the NBA, and much more.",
    "og:image": "https://mcgostisha-com.pages.dev/images/og-image-blog.png",
    "og:url": "https://mcgostisha-com.pages.dev/blog"
  };
};
var loader3 = async () => {
  return [];
};
function BlogItem({ post }) {
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(date);
  }
  const createdAt = formatDate(new Date(post.created_at));
  const updatedAt = formatDate(new Date(post.updated_at));
  return /* @__PURE__ */ React.createElement("div", {
    className: "blogItem"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `${post.id}`
  }, post.title), /* @__PURE__ */ React.createElement("p", null, createdAt === updatedAt ? createdAt : `Written on ${createdAt}`), updatedAt === createdAt ? null : /* @__PURE__ */ React.createElement("p", null, `Last updated ${updatedAt}`));
}
function BlogIndexRoute() {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "blog"
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement(Outline, null, "Blog")), /* @__PURE__ */ React.createElement("div", {
    className: "blog__list"
  }, data.length ? data.map((post) => {
    return /* @__PURE__ */ React.createElement(BlogItem, {
      key: post.id,
      post
    });
  }) : /* @__PURE__ */ React.createElement("p", null, "coming soon")));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/til/$slug": {
    id: "routes/til/$slug",
    parentId: "root",
    path: "til/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/til/index": {
    id: "routes/til/index",
    parentId: "root",
    path: "til",
    index: true,
    caseSensitive: void 0,
    module: til_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvcGVyc29uYWwvbWNnb3N0aXNoYS5jb20vYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAiLi4vLi4vYXBwL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vYXBwL2NvcmUvTGluay50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvcGVyc29uYWwvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy9ibG9nLiRzbHVnLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9wZXJzb25hbC9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL3RpbC8kc2x1Zy50c3giLCAiLi4vLi4vYXBwL3RpbC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvcGVyc29uYWwvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy90aWwvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL091dGxpbmUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL3BlcnNvbmFsL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL3BlcnNvbmFsL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvYmxvZy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvcGVyc29uYWwvbWNnb3N0aXNoYS5jb20vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9wZXJzb25hbC9tY2dvc3Rpc2hhLmNvbS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9wZXJzb25hbC9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL2Jsb2cuJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvcGVyc29uYWwvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy90aWwvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvcGVyc29uYWwvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy90aWwvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvcGVyc29uYWwvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9wZXJzb25hbC9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL2Jsb2cudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9ibG9nLiRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy4kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2cvOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy90aWwvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy90aWwvJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJ0aWwvOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy90aWwvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy90aWwvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJ0aWxcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUNhdGNoLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJ34vY29tcG9uZW50cy9OYXZiYXInO1xuXG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgZGFya1N0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZGFyay5jc3NcIjtcbmltcG9ydCBjb3JlU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9jb3JlLmNzc1wiXG5cbi8qKlxuICogVGhlIGBsaW5rc2AgZXhwb3J0IGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCBtYXAgdG9cbiAqIHRoZSBhdHRyaWJ1dGVzIGZvciBhbiBIVE1MIGA8bGluaz5gIGVsZW1lbnQuIFRoZXNlIHdpbGwgbG9hZCBgPGxpbms+YCB0YWdzIG9uXG4gKiBldmVyeSByb3V0ZSBpbiB0aGUgYXBwLCBidXQgaW5kaXZpZHVhbCByb3V0ZXMgY2FuIGluY2x1ZGUgdGhlaXIgb3duIGxpbmtzXG4gKiB0aGF0IGFyZSBhdXRvbWF0aWNhbGx5IHVubG9hZGVkIHdoZW4gYSB1c2VyIG5hdmlnYXRlcyBhd2F5IGZyb20gdGhlIHJvdXRlLlxuICpcbiAqIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9hcHAjbGlua3NcbiAqL1xuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGdsb2JhbFN0eWxlc1VybCB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBkYXJrU3R5bGVzVXJsLFxuICAgICAgbWVkaWE6IFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiXG4gICAgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGNvcmVTdHlsZXNVcmwgfSxcbiAgXTtcbn07XG5cbi8qKlxuICogVGhlIHJvb3QgbW9kdWxlJ3MgZGVmYXVsdCBleHBvcnQgaXMgYSBjb21wb25lbnQgdGhhdCByZW5kZXJzIHRoZSBjdXJyZW50XG4gKiByb3V0ZSB2aWEgdGhlIGA8T3V0bGV0IC8+YCBjb21wb25lbnQuIFRoaW5rIG9mIHRoaXMgYXMgdGhlIGdsb2JhbCBsYXlvdXRcbiAqIGNvbXBvbmVudCBmb3IgeW91ciBhcHAuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZVxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCI+PC9saW5rPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNYXJ0eSBHb3N0aXNoYVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQWJvdXQgbWUsIEJsb2csIFRJTCBhbmQgbW9yZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9tY2dvc3Rpc2hhLWNvbS5wYWdlcy5kZXYvaW1hZ2VzL29nLWltYWdlLWRlZmF1bHQucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9tY2dvc3Rpc2hhLmNvbVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQG1nMHN0aXNoYVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQG1nMHN0aXNoYVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPk9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2Ake2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YH0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+XG4gICAgICAgICAge2NhdWdodC5zdGF0dXN9OiB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8cD57SlNPTi5zdHJpbmdpZnkoZXJyb3IpfTwvcD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxuICAgICAgICAgICAgdXNlcnMgdG8gc2VlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnfi9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGhlbWUod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0JylcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxMaW5rIHRvPVwiL1wiIGFyaWEtbGFiZWw9XCJCYWNrIHRvIGhvbWUgcGFnZVwiPlxuICAgICAgICA8aW1nIHNyYz17dGhlbWUgPT09ICdsaWdodCcgPyAnL2ltYWdlcy9zaXRlLWxvZ28uc3ZnJyA6ICcvaW1hZ2VzL3NpdGUtbG9nby1saWdodC5zdmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJuYXZiYXJfX2xvZ29cIiAvPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbmF2PlxuICApO1xufSIsICJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gJy4vTGluayc7XG4iLCAiaW1wb3J0IHsgTGluayBhcyBSZW1peExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBleHRlcm5hbD86IGJvb2xlYW47XG4gIHRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBleHRlcm5hbCA9IGZhbHNlLCB0bywgLi4ucmVzdCB9OiBQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lID8gYGxpbmsgJHtjbGFzc05hbWV9YCA6ICdsaW5rJztcblxuICBpZiAoZXh0ZXJuYWwpIHtcbiAgICByZXR1cm4gPGEgaHJlZj17dG99IGNsYXNzTmFtZT17Y2xhc3Nlc30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPntjaGlsZHJlbn08L2E+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVtaXhMaW5rIHRvPXt0b30gY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ucmVzdH0+e2NoaWxkcmVufTwvUmVtaXhMaW5rPlxuICApO1xufSIsICJ0eXBlIFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0Um91dGUocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5CYW08L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBnZXRUSUwgfSBmcm9tIFwifi90aWxcIjtcbmltcG9ydCB0eXBlIHsgVElMSXRlbSB9IGZyb20gXCJ+L3RpbFwiO1xuXG50eXBlIFByb3BzID0ge307XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdQQVJBTVM6JywgcGFyYW1zKTtcbiAgaWYgKCFwYXJhbXMuc2x1ZykgcmV0dXJuIHt9O1xuICByZXR1cm4gZ2V0VElMKHBhcmFtcy5zbHVnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRJTFBvc3RSb3V0ZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8VElMSXRlbT4oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5odG1sIHx8ICcnIH19IC8+XG4gICk7XG59O1xuIiwgImltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwYXJzZUZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSAnbWFya2VkJztcblxuZXhwb3J0IHR5cGUgVElMSXRlbSA9IHtcbiAgc2x1Zzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gIHVwZGF0ZWRfYXQ6IHN0cmluZztcbiAgaHRtbD86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3RNYXJrZG93bkF0dHJpYnV0ZXMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgdXBkYXRlZF9hdDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gaXNWYWxpZFBvc3RBdHRyaWJ1dGVzKFxuICBhdHRyaWJ1dGVzOiBhbnlcbik6IGF0dHJpYnV0ZXMgaXMgUG9zdE1hcmtkb3duQXR0cmlidXRlcyB7XG4gIHJldHVybiBhdHRyaWJ1dGVzPy50aXRsZTtcbn1cblxuY29uc3QgdGlsUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vLi4vY29udGVudC90aWxcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUSUxzKCkge1xuICBjb25zdCBkaXIgPSBhd2FpdCBmcy5yZWFkZGlyKHRpbFBhdGgpO1xuICBjb25zdCB0aWxzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgZGlyLm1hcChhc3luYyBmaWxlbmFtZSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGUocGF0aC5qb2luKHRpbFBhdGgsIGZpbGVuYW1lKSk7XG4gICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHBhcnNlRnJvbnRNYXR0ZXIoZmlsZS50b1N0cmluZygpKTtcblxuXG4gICAgICBpbnZhcmlhbnQoaXNWYWxpZFBvc3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIHRpbHMuc29ydCgoYSwgYikgPT4gKGEuY3JlYXRlZF9hdCA+IGIuY3JlYXRlZF9hdCA/IC0xIDogMSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VElMKHNsdWc6IHN0cmluZykge1xuICBjb25zdCBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGUocGF0aC5qb2luKHRpbFBhdGgsIGAke3NsdWd9Lm1kYCkpO1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGJvZHkgfSA9IHBhcnNlRnJvbnRNYXR0ZXIoZmlsZS50b1N0cmluZygpKTtcbiAgaW52YXJpYW50KGlzVmFsaWRQb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSk7XG4gIHJldHVybiB7XG4gICAgc2x1ZyxcbiAgICBodG1sOiBtYXJrZWQoYm9keSksXG4gICAgLi4uYXR0cmlidXRlc1xuICB9O1xufSIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgZ2V0VElMcyB9IGZyb20gXCJ+L3RpbFwiO1xuaW1wb3J0IHR5cGUgeyBUSUxJdGVtIH0gZnJvbSBcIn4vdGlsXCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tICd+L2NvcmUnO1xuaW1wb3J0IE91dGxpbmUgZnJvbSAnfi9jb21wb25lbnRzL091dGxpbmUnO1xuXG5pbXBvcnQgdGlsQ3NzVXJsIGZyb20gJ34vc3R5bGVzL3JvdXRlcy90aWwuY3NzJztcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRpbENzc1VybCB9LFxuICBdO1xufTtcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwidGlsIHwgbWNnb3N0aXNoYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNob3J0IHNuaXBwZXRzIG9mIGNvbnRlbnQgSSd2ZSBsZWFybmVkIHJlY2VudGx5XCIsXG4gICAgJ29nOnRpdGxlJzogXCJUSUwgKFRvZGF5IEkgTGVhcm5lZClcIixcbiAgICAnb2c6ZGVzY3JpcHRpb24nOiBcIlF1aWNrIHNuaXBwZXRzIG9mIHRoaW5ncyBJJ3ZlIGxlYXJuZWQgcmVjZW50bHkuXCIsXG4gICAgJ29nOmltYWdlJzogXCJodHRwczovL21jZ29zdGlzaGEtY29tLnBhZ2VzLmRldi9pbWFnZXMvb2ctaW1hZ2UtdGlsLnBuZ1wiLFxuICAgICdvZzp1cmwnOiBcImh0dHBzOi8vbWNnb3N0aXNoYS1jb20ucGFnZXMuZGV2L3RpbFwiLFxuICB9O1xufTtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gZ2V0VElMcygpO1xufVxuXG50eXBlIFRJTEl0ZW1Qcm9wcyA9IHtcbiAgdGlsOiBUSUxJdGVtO1xufVxuXG5mdW5jdGlvbiBUSUwoeyB0aWwgfTogVElMSXRlbVByb3BzKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSkge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVkQXQgPSBmb3JtYXREYXRlKG5ldyBEYXRlKHRpbC5jcmVhdGVkX2F0KSk7XG4gIGNvbnN0IHVwZGF0ZWRBdCA9IGZvcm1hdERhdGUobmV3IERhdGUodGlsLnVwZGF0ZWRfYXQpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsSXRlbVwiPlxuICAgICAgPExpbmsgdG89e2Ake3RpbC5zbHVnfWB9Pnt0aWwudGl0bGV9PC9MaW5rPlxuICAgICAgPHA+e2NyZWF0ZWRBdCA9PT0gdXBkYXRlZEF0ID8gY3JlYXRlZEF0IDogYFdyaXR0ZW4gb24gJHtjcmVhdGVkQXR9YH08L3A+XG4gICAgICB7dXBkYXRlZEF0ID09PSBjcmVhdGVkQXQgPyBudWxsIDogPHA+e2BMYXN0IHVwZGF0ZWQgJHt1cGRhdGVkQXR9YH08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG50eXBlIFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRJTEluZGV4Um91dGUocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPFRJTEl0ZW1bXT4oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbFwiPlxuICAgICAgPGgxPjxPdXRsaW5lPlQ8L091dGxpbmU+b2RheSA8T3V0bGluZT5JPC9PdXRsaW5lPiA8T3V0bGluZT5MPC9PdXRsaW5lPmVhcm5lZDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbF9fbGlzdFwiPlxuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5sZW5ndGggP1xuICAgICAgICAgICAgZGF0YS5tYXAodGlsID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8VElMIGtleT17dGlsLnNsdWd9IHRpbD17dGlsfSAvPilcbiAgICAgICAgICAgIH0pIDogPHA+Y29taW5nIHNvb248L3A+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTsiLCAiXG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91dGxpbmUoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dGxpbmVcIj57Y2hpbGRyZW59PC9zcGFuPlxuICApO1xufTtcblxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnfi9jb3JlJztcbmltcG9ydCBPdXRsaW5lIGZyb20gJ34vY29tcG9uZW50cy9PdXRsaW5lJztcblxuaW1wb3J0IGluZGV4Q3NzVXJsIGZyb20gJ34vc3R5bGVzL3JvdXRlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogaW5kZXhDc3NVcmwgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcImhvbWUgfCBtY2dvc3Rpc2hhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9tZXBhZ2UgZm9yIE1hcnR5IEdvc3Rpc2hhXCJcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIj5cbiAgICAgIDxoMT5JJ20gPE91dGxpbmU+TWFydHk8L091dGxpbmU+LCBhbiBlbmdpbmVlcihpbmcgbWFuYWdlcikuPC9oMT5cbiAgICAgIDxwPkkgbGVhZCB0aGUgPE91dGxpbmU+d2ViIHByb2R1Y3QgdGVhbTwvT3V0bGluZT4gZm9yIDxMaW5rIGV4dGVybmFsIHRvPVwiaHR0cHM6Ly9pbmZvLmZsaXBncmlkLmNvbVwiPkZsaXBncmlkPC9MaW5rPiBhdCA8TGluayBleHRlcm5hbCB0bz1cImh0dHBzOi8vY2FyZWVycy5taWNyb3NvZnQuY29tL3VzL2VuL3NlYXJjaC1yZXN1bHRzP2tleXdvcmRzPUZsaXBncmlkXCI+TWljcm9zb2Z0PC9MaW5rPi48L3A+XG4gICAgICA8cD5JJ20gPE91dGxpbmU+d3JpdGluZzwvT3V0bGluZT4gb24gbXkgPExpbmsgdG89XCJibG9nXCI+YmxvZzwvTGluaz4uPC9wPlxuICAgICAgPHA+U29tZXRpbWVzIEkgPExpbmsgZXh0ZXJuYWwgdG89XCJodHRwczovL3R3aXR0ZXIuY29tL21nMHN0aXNoYVwiPnR3ZWV0PC9MaW5rPi48L3A+XG4gICAgICA8cD5JIHBvc3Qgc25pcHBldHMgYWJvdXQgd2hhdCBJJ20gPE91dGxpbmU+bGVhcm5pbmc8L091dGxpbmU+IG9uIDxMaW5rIHRvPVwidGlsXCI+VElMPC9MaW5rPi48L3A+XG4gICAgICA8cD5Zb3UgY2FuIHZpZXcgbXkgPGRlbD51bmZpbmlzaGVkIHNpZGUgcHJvamVjdHM8L2RlbD4gY29kZSBvbiA8TGluayBleHRlcm5hbCB0bz1cImh0dHBzOi8vZ2l0aHViLmNvbS9tZ29zdGlzaGFcIj5naXRodWI8L0xpbms+LjwvcD5cbiAgICAgIDxwPkZlZWwgZnJlZSB0byBzZW5kIG1lIGFuIDxMaW5rIGV4dGVybmFsIHRvPVwibWFpbHRvOm1hcnRpbmdvc3Rpc2hhQGdtYWlsLmNvbVwiPmVtYWlsPC9MaW5rPi48L3A+XG4gICAgPC9kaXYgPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnfi9jb3JlJztcbmltcG9ydCBPdXRsaW5lIGZyb20gJ34vY29tcG9uZW50cy9PdXRsaW5lJztcblxuaW1wb3J0IGJsb2dDc3NVcmwgZnJvbSAnfi9zdHlsZXMvcm91dGVzL2Jsb2cuY3NzJztcblxudHlwZSBQb3N0ID0ge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gIHVwZGF0ZWRfYXQ6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBibG9nQ3NzVXJsIH0sXG4gIF07XG59O1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJibG9nIHwgbWNnb3N0aXNoYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJsb2dnaW5nIGFib3V0IHdlYiBkZXZlbG9wbWVudCwgZW5naW5lZXJpbmcgbWFuYWdlbWVudCwgdGhlIE5CQSwgYW5kIG11Y2ggbW9yZS5cIixcbiAgICAnb2c6dGl0bGUnOiBcIkJsb2dcIixcbiAgICAnb2c6ZGVzY3JpcHRpb24nOiBcIkJsb2dnaW5nIGFib3V0IHdlYiBkZXZlbG9wbWVudCwgZW5naW5lZXJpbmcgbWFuYWdlbWVudCwgdGhlIE5CQSwgYW5kIG11Y2ggbW9yZS5cIixcbiAgICAnb2c6aW1hZ2UnOiBcImh0dHBzOi8vbWNnb3N0aXNoYS1jb20ucGFnZXMuZGV2L2ltYWdlcy9vZy1pbWFnZS1ibG9nLnBuZ1wiLFxuICAgICdvZzp1cmwnOiBcImh0dHBzOi8vbWNnb3N0aXNoYS1jb20ucGFnZXMuZGV2L2Jsb2dcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIFtdO1xufVxuXG50eXBlIEJsb2dJdGVtUHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3Q7XG59XG5cbmZ1bmN0aW9uIEJsb2dJdGVtKHsgcG9zdCB9OiBCbG9nSXRlbVByb3BzKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSkge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVkQXQgPSBmb3JtYXREYXRlKG5ldyBEYXRlKHBvc3QuY3JlYXRlZF9hdCkpO1xuICBjb25zdCB1cGRhdGVkQXQgPSBmb3JtYXREYXRlKG5ldyBEYXRlKHBvc3QudXBkYXRlZF9hdCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9nSXRlbVwiPlxuICAgICAgPExpbmsgdG89e2Ake3Bvc3QuaWR9YH0+e3Bvc3QudGl0bGV9PC9MaW5rPlxuICAgICAgPHA+e2NyZWF0ZWRBdCA9PT0gdXBkYXRlZEF0ID8gY3JlYXRlZEF0IDogYFdyaXR0ZW4gb24gJHtjcmVhdGVkQXR9YH08L3A+XG4gICAgICB7dXBkYXRlZEF0ID09PSBjcmVhdGVkQXQgPyBudWxsIDogPHA+e2BMYXN0IHVwZGF0ZWQgJHt1cGRhdGVkQXR9YH08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nSW5kZXhSb3V0ZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8UG9zdFtdPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9nXCI+XG4gICAgICA8aDE+PE91dGxpbmU+QmxvZzwvT3V0bGluZT48L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX19saXN0XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLmxlbmd0aCA/XG4gICAgICAgICAgICBkYXRhLm1hcChwb3N0ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8QmxvZ0l0ZW0ga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPilcbiAgICAgICAgICAgIH0pIDogPHA+Y29taW5nIHNvb248L3A+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7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
