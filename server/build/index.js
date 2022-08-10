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

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/root.tsx
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

// app/core/index.ts
init_react();

// app/core/ContentMetadata.tsx
init_react();

// app/utils/dates.ts
init_react();
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(date);
}

// app/core/ContentMetadata.tsx
function ContentMetadata({ createdAt, updatedAt }) {
  const created = formatDate(createdAt);
  const updated = formatDate(updatedAt);
  return /* @__PURE__ */ React.createElement("div", {
    className: "contentMetadata grid-column-prose"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Outline, null, "Created"), " ", created), created === updated ? null : /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Outline, null, "Updated"), " ", updated));
}

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

// app/core/Navbar.tsx
init_react();
var import_react = __toModule(require("react"));
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

// app/core/Outline.tsx
init_react();
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

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/root.tsx
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
    href: "https://mcgostisha.com/images/favicon.png"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_remix3.Meta, null), /* @__PURE__ */ React2.createElement(import_remix3.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React2.createElement(import_remix3.LiveReload, null)));
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

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => BlogPostRoute
});
init_react();
function BlogPostRoute(props) {
  return /* @__PURE__ */ React.createElement("div", null, "Bam");
}

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogIndexRoute,
  links: () => links2,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/styles/routes/blog.css
var blog_default = "/build/_assets/blog-2CHDAXI3.css";

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/routes/blog/index.tsx
var links2 = () => {
  return [
    { rel: "stylesheet", href: blog_default }
  ];
};
var meta = () => {
  return {
    title: "blog | mcgostisha",
    description: "Blogging about web development, engineering management, the NBA, and much more.",
    "og:title": "Blog",
    "og:description": "Blogging about web development, engineering management, the NBA, and much more.",
    "og:image": "https://mcgostisha.com/images/og-image-blog.png",
    "og:url": "https://mcgostisha.com/blog"
  };
};
var loader = async () => {
  return [];
};
function BlogItem({ post }) {
  const createdAt = formatDate(post.created_at);
  const updatedAt = formatDate(post.updated_at);
  return /* @__PURE__ */ React.createElement("div", {
    className: "blogItem"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `${post.id}`
  }, post.title), /* @__PURE__ */ React.createElement("p", null, createdAt === updatedAt ? createdAt : `Written on ${createdAt}`), updatedAt === createdAt ? null : /* @__PURE__ */ React.createElement("p", null, `Last updated ${updatedAt}`));
}
function BlogIndexRoute() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "blog grid"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "grid-column-container"
  }, /* @__PURE__ */ React.createElement(Outline, null, "Blog")), /* @__PURE__ */ React.createElement("div", {
    className: "blog__list grid-column-container"
  }, data.length ? data.map((post) => {
    return /* @__PURE__ */ React.createElement(BlogItem, {
      key: post.id,
      post
    });
  }) : /* @__PURE__ */ React.createElement("p", null, "coming soon")));
}

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/routes/til/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => TILPostRoute,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());

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
async function getTIL(slug) {
  const file = await import_promises.default.readFile(import_path.default.join(tilPath, `${slug}.md`));
  const { attributes, body } = (0, import_front_matter.default)(file.toString());
  (0, import_tiny_invariant.default)(isValidPostAttributes(attributes));
  return __spreadValues({
    slug,
    html: (0, import_marked.marked)(body)
  }, attributes);
}

// app/styles/routes/til.css
var til_default = "/build/_assets/til-5NB7C5IS.css";

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/routes/til/$slug.tsx
var links3 = () => {
  return [
    { rel: "stylesheet", href: til_default }
  ];
};
var loader2 = async ({ params }) => {
  if (!params.slug)
    return {};
  return getTIL(params.slug);
};
function TILPostRoute(props) {
  const data = (0, import_remix5.useLoaderData)();
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

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/routes/til/index.tsx
var til_exports = {};
__export(til_exports, {
  default: () => TILIndexRoute,
  links: () => links4,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_remix6 = __toModule(require_remix());
var links4 = () => {
  return [
    { rel: "stylesheet", href: til_default }
  ];
};
var meta2 = () => {
  return {
    title: "til | mcgostisha",
    description: "Short snippets of content I've learned recently",
    "og:title": "TIL (Today I Learned)",
    "og:description": "Quick snippets of things I've learned recently.",
    "og:image": "https://mcgostisha.com/images/og-image-til.png",
    "og:url": "https://mcgostisha.com/til"
  };
};
var loader3 = async () => {
  return [];
};
function TILListItem({ til }) {
  function formatDate2(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(date);
  }
  const createdAt = formatDate2(new Date(til.created_at));
  const updatedAt = formatDate2(new Date(til.updated_at));
  return /* @__PURE__ */ React.createElement("div", {
    className: "til__listItem"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `${til.slug}`
  }, til.title), /* @__PURE__ */ React.createElement("p", null, createdAt === updatedAt ? createdAt : `Written on ${createdAt}`), updatedAt === createdAt ? null : /* @__PURE__ */ React.createElement("p", null, `Last updated ${updatedAt}`));
}
function TILIndexRoute(props) {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "til grid"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "grid-column-container"
  }, /* @__PURE__ */ React.createElement(Outline, null, "T"), "oday ", /* @__PURE__ */ React.createElement(Outline, null, "I"), " ", /* @__PURE__ */ React.createElement(Outline, null, "L"), "earned"), /* @__PURE__ */ React.createElement("div", {
    className: "til__list grid-column-container"
  }, data.length ? data.map((til) => {
    return /* @__PURE__ */ React.createElement(TILListItem, {
      key: til.slug,
      til
    });
  }) : /* @__PURE__ */ React.createElement("p", null, "coming soon")));
}

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5,
  meta: () => meta3
});
init_react();

// app/styles/routes/index.css
var routes_default = "/build/_assets/index-5UMX2ZH7.css";

// route-module:/Users/martingostisha/Developer/mcgostisha.com/app/routes/index.tsx
var links5 = () => {
  return [
    { rel: "stylesheet", href: routes_default }
  ];
};
var meta3 = () => {
  return {
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
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "index grid"
  }, /* @__PURE__ */ React.createElement("h1", null, "I'm ", /* @__PURE__ */ React.createElement(Outline, null, "Marty"), ", an engineer(ing manager)."), /* @__PURE__ */ React.createElement("p", null, "I lead the ", /* @__PURE__ */ React.createElement(Outline, null, "web product team"), " for ", /* @__PURE__ */ React.createElement(Link, {
    external: true,
    to: "https://info.flip.com"
  }, "Flip"), " at ", /* @__PURE__ */ React.createElement(Link, {
    external: true,
    to: "https://careers.microsoft.com/us/en/search-results?keywords=Flip"
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
    index: true,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb3JlL2luZGV4LnRzIiwgIi4uLy4uL2FwcC9jb3JlL0NvbnRlbnRNZXRhZGF0YS50c3giLCAiLi4vLi4vYXBwL3V0aWxzL2RhdGVzLnRzIiwgIi4uLy4uL2FwcC9jb3JlL0xpbmsudHN4IiwgIi4uLy4uL2FwcC9jb3JlL05hdmJhci50c3giLCAiLi4vLi4vYXBwL2NvcmUvT3V0bGluZS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy9ibG9nLyRzbHVnLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvdGlsLyRzbHVnLnRzeCIsICIuLi8uLi9hcHAvdGlsLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL3RpbC9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9tY2dvc3Rpc2hhLmNvbS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL2Jsb2cvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvdGlsLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvdGlsL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9ibG9nLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2cvOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9ibG9nL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2dcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvdGlsLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvdGlsLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwidGlsLzpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvdGlsL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvdGlsL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwidGlsXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VDYXRjaCxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnfi9jb3JlJztcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IGRhcmtTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2RhcmsuY3NzXCI7XG5pbXBvcnQgY29yZVN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvY29yZS5jc3NcIlxuXG4vKipcbiAqIFRoZSBgbGlua3NgIGV4cG9ydCBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgbWFwIHRvXG4gKiB0aGUgYXR0cmlidXRlcyBmb3IgYW4gSFRNTCBgPGxpbms+YCBlbGVtZW50LiBUaGVzZSB3aWxsIGxvYWQgYDxsaW5rPmAgdGFncyBvblxuICogZXZlcnkgcm91dGUgaW4gdGhlIGFwcCwgYnV0IGluZGl2aWR1YWwgcm91dGVzIGNhbiBpbmNsdWRlIHRoZWlyIG93biBsaW5rc1xuICogdGhhdCBhcmUgYXV0b21hdGljYWxseSB1bmxvYWRlZCB3aGVuIGEgdXNlciBuYXZpZ2F0ZXMgYXdheSBmcm9tIHRoZSByb3V0ZS5cbiAqXG4gKiBodHRwczovL3JlbWl4LnJ1bi9hcGkvYXBwI2xpbmtzXG4gKi9cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZGFya1N0eWxlc1VybCxcbiAgICAgIG1lZGlhOiBcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxuICAgIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBjb3JlU3R5bGVzVXJsIH0sXG4gIF07XG59O1xuXG4vKipcbiAqIFRoZSByb290IG1vZHVsZSdzIGRlZmF1bHQgZXhwb3J0IGlzIGEgY29tcG9uZW50IHRoYXQgcmVuZGVycyB0aGUgY3VycmVudFxuICogcm91dGUgdmlhIHRoZSBgPE91dGxldCAvPmAgY29tcG9uZW50LiBUaGluayBvZiB0aGlzIGFzIHRoZSBnbG9iYWwgbGF5b3V0XG4gKiBjb21wb25lbnQgZm9yIHlvdXIgYXBwLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGVcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vbWNnb3N0aXNoYS5jb20vaW1hZ2VzL2Zhdmljb24ucG5nXCI+PC9saW5rPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIE9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3NcbiAgICAgICAgICB0by5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeShlcnJvcil9PC9wPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSGV5LCBkZXZlbG9wZXIsIHlvdSBzaG91bGQgcmVwbGFjZSB0aGlzIHdpdGggd2hhdCB5b3Ugd2FudCB5b3VyXG4gICAgICAgICAgICB1c2VycyB0byBzZWUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRlbnRNZXRhZGF0YSB9IGZyb20gJy4vQ29udGVudE1ldGFkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gJy4vTGluayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmJhciB9IGZyb20gJy4vTmF2YmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3V0bGluZSB9IGZyb20gJy4vT3V0bGluZSc7XG5cbiIsICJpbXBvcnQgeyBPdXRsaW5lIH0gZnJvbSBcIn4vY29yZVwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJ+L3V0aWxzL2RhdGVzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRNZXRhZGF0YSh7IGNyZWF0ZWRBdCwgdXBkYXRlZEF0IH06IFByb3BzKSB7XG4gIGNvbnN0IGNyZWF0ZWQgPSBmb3JtYXREYXRlKGNyZWF0ZWRBdCk7XG4gIGNvbnN0IHVwZGF0ZWQgPSBmb3JtYXREYXRlKHVwZGF0ZWRBdCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50TWV0YWRhdGEgZ3JpZC1jb2x1bW4tcHJvc2VcIj5cbiAgICAgIDxwPjxPdXRsaW5lPkNyZWF0ZWQ8L091dGxpbmU+IHtjcmVhdGVkfTwvcD5cbiAgICAgIHtjcmVhdGVkID09PSB1cGRhdGVkID8gbnVsbCA6IDxwPjxPdXRsaW5lPlVwZGF0ZWQ8L091dGxpbmU+IHt1cGRhdGVkfTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KS5mb3JtYXQoZGF0ZSk7XG59IiwgImltcG9ydCB7IExpbmsgYXMgUmVtaXhMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgZXh0ZXJuYWw/OiBib29sZWFuO1xuICB0bzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZXh0ZXJuYWwgPSBmYWxzZSwgdG8sIC4uLnJlc3QgfTogUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZSA/IGBsaW5rICR7Y2xhc3NOYW1lfWAgOiAnbGluayc7XG5cbiAgaWYgKGV4dGVybmFsKSB7XG4gICAgcmV0dXJuIDxhIGhyZWY9e3RvfSBjbGFzc05hbWU9e2NsYXNzZXN9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj57Y2hpbGRyZW59PC9hPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlbWl4TGluayB0bz17dG99IGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLnJlc3R9PntjaGlsZHJlbn08L1JlbWl4TGluaz5cbiAgKTtcbn0iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICd+L2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJ2xpZ2h0Jyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaGVtZSh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgPyAnZGFyaycgOiAnbGlnaHQnKVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgPExpbmsgdG89XCIvXCIgYXJpYS1sYWJlbD1cIkJhY2sgdG8gaG9tZSBwYWdlXCI+XG4gICAgICAgIDxpbWcgc3JjPXt0aGVtZSA9PT0gJ2xpZ2h0JyA/ICcvaW1hZ2VzL3NpdGUtbG9nby5zdmcnIDogJy9pbWFnZXMvc2l0ZS1sb2dvLWxpZ2h0LnN2Zyd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nb1wiIC8+XG4gICAgICA8L0xpbms+XG4gICAgPC9uYXY+XG4gICk7XG59IiwgIlxuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXRsaW5lKHsgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRsaW5lXCI+e2NoaWxkcmVufTwvc3Bhbj5cbiAgKTtcbn07XG5cbiIsICJ0eXBlIFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0Um91dGUocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5CYW08L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IExpbmssIE91dGxpbmUgfSBmcm9tICd+L2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ34vdXRpbHMvZGF0ZXMnO1xuXG5pbXBvcnQgYmxvZ0Nzc1VybCBmcm9tICd+L3N0eWxlcy9yb3V0ZXMvYmxvZy5jc3MnO1xuXG50eXBlIFBvc3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgdXBkYXRlZF9hdDogc3RyaW5nO1xuICB0YWdzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGJsb2dDc3NVcmwgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcImJsb2cgfCBtY2dvc3Rpc2hhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmxvZ2dpbmcgYWJvdXQgd2ViIGRldmVsb3BtZW50LCBlbmdpbmVlcmluZyBtYW5hZ2VtZW50LCB0aGUgTkJBLCBhbmQgbXVjaCBtb3JlLlwiLFxuICAgICdvZzp0aXRsZSc6IFwiQmxvZ1wiLFxuICAgICdvZzpkZXNjcmlwdGlvbic6IFwiQmxvZ2dpbmcgYWJvdXQgd2ViIGRldmVsb3BtZW50LCBlbmdpbmVlcmluZyBtYW5hZ2VtZW50LCB0aGUgTkJBLCBhbmQgbXVjaCBtb3JlLlwiLFxuICAgICdvZzppbWFnZSc6IFwiaHR0cHM6Ly9tY2dvc3Rpc2hhLmNvbS9pbWFnZXMvb2ctaW1hZ2UtYmxvZy5wbmdcIixcbiAgICAnb2c6dXJsJzogXCJodHRwczovL21jZ29zdGlzaGEuY29tL2Jsb2dcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIFtdO1xufVxuXG50eXBlIEJsb2dJdGVtUHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3Q7XG59XG5cbmZ1bmN0aW9uIEJsb2dJdGVtKHsgcG9zdCB9OiBCbG9nSXRlbVByb3BzKSB7XG4gIGNvbnN0IGNyZWF0ZWRBdCA9IGZvcm1hdERhdGUocG9zdC5jcmVhdGVkX2F0KTtcbiAgY29uc3QgdXBkYXRlZEF0ID0gZm9ybWF0RGF0ZShwb3N0LnVwZGF0ZWRfYXQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9nSXRlbVwiPlxuICAgICAgPExpbmsgdG89e2Ake3Bvc3QuaWR9YH0+e3Bvc3QudGl0bGV9PC9MaW5rPlxuICAgICAgPHA+e2NyZWF0ZWRBdCA9PT0gdXBkYXRlZEF0ID8gY3JlYXRlZEF0IDogYFdyaXR0ZW4gb24gJHtjcmVhdGVkQXR9YH08L3A+XG4gICAgICB7dXBkYXRlZEF0ID09PSBjcmVhdGVkQXQgPyBudWxsIDogPHA+e2BMYXN0IHVwZGF0ZWQgJHt1cGRhdGVkQXR9YH08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nSW5kZXhSb3V0ZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8UG9zdFtdPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9nIGdyaWRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJncmlkLWNvbHVtbi1jb250YWluZXJcIj48T3V0bGluZT5CbG9nPC9PdXRsaW5lPjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2xpc3QgZ3JpZC1jb2x1bW4tY29udGFpbmVyXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLmxlbmd0aCA/XG4gICAgICAgICAgICBkYXRhLm1hcChwb3N0ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8QmxvZ0l0ZW0ga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPilcbiAgICAgICAgICAgIH0pIDogPHA+Y29taW5nIHNvb248L3A+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwifi9jb3JlXCI7XG5pbXBvcnQgQ29udGVudE1ldGFkYXRhIGZyb20gXCJ+L2NvcmUvQ29udGVudE1ldGFkYXRhXCI7XG5pbXBvcnQgeyBnZXRUSUwgfSBmcm9tIFwifi90aWxcIjtcbmltcG9ydCB0eXBlIHsgVElMSXRlbSB9IGZyb20gXCJ+L3RpbFwiO1xuXG5pbXBvcnQgdGlsQ3NzVXJsIGZyb20gJ34vc3R5bGVzL3JvdXRlcy90aWwuY3NzJztcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRpbENzc1VybCB9LFxuICBdO1xufTtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpZiAoIXBhcmFtcy5zbHVnKSByZXR1cm4ge307XG4gIHJldHVybiBnZXRUSUwocGFyYW1zLnNsdWcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVElMUG9zdFJvdXRlKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxUSUxJdGVtPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxTbHVnIGdyaWRcIj5cbiAgICAgIDxMaW5rIHRvPVwiL3RpbFwiIGNsYXNzTmFtZT1cImdyaWQtY29sdW1uLWNvbnRhaW5lclwiPkJhY2sgdG8gVElMczwvTGluaz5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aWxTbHVnX190aXRsZSBncmlkLWNvbHVtbi1wcm9zZVwiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICA8Q29udGVudE1ldGFkYXRhIGNyZWF0ZWRBdD17ZGF0YS5jcmVhdGVkX2F0fSB1cGRhdGVkQXQ9e2RhdGEudXBkYXRlZF9hdH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsU2x1Z19fY29udGVudCBncmlkLWNvbHVtbi1wcm9zZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5odG1sIHx8ICcnIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwYXJzZUZyb250TWF0dGVyIGZyb20gXCJmcm9udC1tYXR0ZXJcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSAnbWFya2VkJztcblxuZXhwb3J0IHR5cGUgVElMSXRlbSA9IHtcbiAgc2x1Zzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gIHVwZGF0ZWRfYXQ6IHN0cmluZztcbiAgaHRtbD86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3RNYXJrZG93bkF0dHJpYnV0ZXMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgdXBkYXRlZF9hdDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gaXNWYWxpZFBvc3RBdHRyaWJ1dGVzKFxuICBhdHRyaWJ1dGVzOiBhbnlcbik6IGF0dHJpYnV0ZXMgaXMgUG9zdE1hcmtkb3duQXR0cmlidXRlcyB7XG4gIHJldHVybiBhdHRyaWJ1dGVzPy50aXRsZTtcbn1cblxuY29uc3QgdGlsUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vLi4vY29udGVudC90aWxcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUSUxzKCkge1xuICBjb25zdCBkaXIgPSBhd2FpdCBmcy5yZWFkZGlyKHRpbFBhdGgpO1xuICBjb25zdCB0aWxzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgZGlyLm1hcChhc3luYyBmaWxlbmFtZSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGUocGF0aC5qb2luKHRpbFBhdGgsIGZpbGVuYW1lKSk7XG4gICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHBhcnNlRnJvbnRNYXR0ZXIoZmlsZS50b1N0cmluZygpKTtcblxuXG4gICAgICBpbnZhcmlhbnQoaXNWYWxpZFBvc3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIHRpbHMuc29ydCgoYSwgYikgPT4gKGEuY3JlYXRlZF9hdCA+IGIuY3JlYXRlZF9hdCA/IC0xIDogMSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VElMKHNsdWc6IHN0cmluZykge1xuICBjb25zdCBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGUocGF0aC5qb2luKHRpbFBhdGgsIGAke3NsdWd9Lm1kYCkpO1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGJvZHkgfSA9IHBhcnNlRnJvbnRNYXR0ZXIoZmlsZS50b1N0cmluZygpKTtcbiAgaW52YXJpYW50KGlzVmFsaWRQb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSk7XG4gIHJldHVybiB7XG4gICAgc2x1ZyxcbiAgICBodG1sOiBtYXJrZWQoYm9keSksXG4gICAgLi4uYXR0cmlidXRlc1xuICB9O1xufSIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuLy8gaW1wb3J0IHsgZ2V0VElMcyB9IGZyb20gXCJ+L3RpbFwiO1xuaW1wb3J0IHR5cGUgeyBUSUxJdGVtIH0gZnJvbSBcIn4vdGlsXCI7XG5cbmltcG9ydCB7IExpbmssIE91dGxpbmUgfSBmcm9tICd+L2NvcmUnO1xuXG5pbXBvcnQgdGlsQ3NzVXJsIGZyb20gJ34vc3R5bGVzL3JvdXRlcy90aWwuY3NzJztcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRpbENzc1VybCB9LFxuICBdO1xufTtcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwidGlsIHwgbWNnb3N0aXNoYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNob3J0IHNuaXBwZXRzIG9mIGNvbnRlbnQgSSd2ZSBsZWFybmVkIHJlY2VudGx5XCIsXG4gICAgJ29nOnRpdGxlJzogXCJUSUwgKFRvZGF5IEkgTGVhcm5lZClcIixcbiAgICAnb2c6ZGVzY3JpcHRpb24nOiBcIlF1aWNrIHNuaXBwZXRzIG9mIHRoaW5ncyBJJ3ZlIGxlYXJuZWQgcmVjZW50bHkuXCIsXG4gICAgJ29nOmltYWdlJzogXCJodHRwczovL21jZ29zdGlzaGEuY29tL2ltYWdlcy9vZy1pbWFnZS10aWwucG5nXCIsXG4gICAgJ29nOnVybCc6IFwiaHR0cHM6Ly9tY2dvc3Rpc2hhLmNvbS90aWxcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIFtdO1xufVxuXG50eXBlIFRJTEl0ZW1Qcm9wcyA9IHtcbiAgdGlsOiBUSUxJdGVtO1xufVxuXG5mdW5jdGlvbiBUSUxMaXN0SXRlbSh7IHRpbCB9OiBUSUxJdGVtUHJvcHMpIHtcbiAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZWRBdCA9IGZvcm1hdERhdGUobmV3IERhdGUodGlsLmNyZWF0ZWRfYXQpKTtcbiAgY29uc3QgdXBkYXRlZEF0ID0gZm9ybWF0RGF0ZShuZXcgRGF0ZSh0aWwudXBkYXRlZF9hdCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxfX2xpc3RJdGVtXCI+XG4gICAgICA8TGluayB0bz17YCR7dGlsLnNsdWd9YH0+e3RpbC50aXRsZX08L0xpbms+XG4gICAgICA8cD57Y3JlYXRlZEF0ID09PSB1cGRhdGVkQXQgPyBjcmVhdGVkQXQgOiBgV3JpdHRlbiBvbiAke2NyZWF0ZWRBdH1gfTwvcD5cbiAgICAgIHt1cGRhdGVkQXQgPT09IGNyZWF0ZWRBdCA/IG51bGwgOiA8cD57YExhc3QgdXBkYXRlZCAke3VwZGF0ZWRBdH1gfTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVElMSW5kZXhSb3V0ZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8VElMSXRlbVtdPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsIGdyaWRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJncmlkLWNvbHVtbi1jb250YWluZXJcIj48T3V0bGluZT5UPC9PdXRsaW5lPm9kYXkgPE91dGxpbmU+STwvT3V0bGluZT4gPE91dGxpbmU+TDwvT3V0bGluZT5lYXJuZWQ8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxfX2xpc3QgZ3JpZC1jb2x1bW4tY29udGFpbmVyXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLmxlbmd0aCA/XG4gICAgICAgICAgICBkYXRhLm1hcCh0aWwgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxUSUxMaXN0SXRlbSBrZXk9e3RpbC5zbHVnfSB0aWw9e3RpbH0gLz4pXG4gICAgICAgICAgICB9KSA6IDxwPmNvbWluZyBzb29uPC9wPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07IiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rLCBPdXRsaW5lIH0gZnJvbSAnfi9jb3JlJztcblxuaW1wb3J0IGluZGV4Q3NzVXJsIGZyb20gJ34vc3R5bGVzL3JvdXRlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogaW5kZXhDc3NVcmwgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcImhvbWUgfCBtY2dvc3Rpc2hhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9tZXBhZ2UgZm9yIE1hcnR5IEdvc3Rpc2hhXCIsXG4gICAgXCJvZzp0aXRsZVwiOiBcIk1hcnR5IEdvc3Rpc2hhXCIsXG4gICAgXCJvZzpkZXNjcmlwdGlvblwiOiBcIkFib3V0IG1lLCBCbG9nLCBUSUwgYW5kIG1vcmVcIixcbiAgICBcIm9nOmltYWdlXCI6IFwiaHR0cHM6Ly9tY2dvc3Rpc2hhLmNvbS9pbWFnZXMvb2ctaW1hZ2UtZGVmYXVsdC5wbmdcIixcbiAgICBcIm9nOnVybFwiOiBcImh0dHBzOi8vbWNnb3N0aXNoYS5jb21cIixcbiAgICBcIm9nOnR5cGVcIjogXCJ3ZWJzaXRlXCIsXG4gICAgXCJ0d2l0dGVyOmNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG4gICAgXCJ0d2l0dGVyOnNpdGVcIjogXCJAbWcwc3Rpc2hhXCIsXG4gICAgXCJ0d2l0dGVyOmNyZWF0b3JcIjogXCJAbWcwc3Rpc2hhXCJcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXggZ3JpZFwiPlxuICAgICAgPGgxPkknbSA8T3V0bGluZT5NYXJ0eTwvT3V0bGluZT4sIGFuIGVuZ2luZWVyKGluZyBtYW5hZ2VyKS48L2gxPlxuICAgICAgPHA+SSBsZWFkIHRoZSA8T3V0bGluZT53ZWIgcHJvZHVjdCB0ZWFtPC9PdXRsaW5lPiBmb3IgPExpbmsgZXh0ZXJuYWwgdG89XCJodHRwczovL2luZm8uZmxpcC5jb21cIj5GbGlwPC9MaW5rPiBhdCA8TGluayBleHRlcm5hbCB0bz1cImh0dHBzOi8vY2FyZWVycy5taWNyb3NvZnQuY29tL3VzL2VuL3NlYXJjaC1yZXN1bHRzP2tleXdvcmRzPUZsaXBcIj5NaWNyb3NvZnQ8L0xpbms+LjwvcD5cbiAgICAgIDxwPkknbSA8T3V0bGluZT53cml0aW5nPC9PdXRsaW5lPiBvbiBteSA8TGluayB0bz1cImJsb2dcIj5ibG9nPC9MaW5rPi48L3A+XG4gICAgICA8cD5Tb21ldGltZXMgSSA8TGluayBleHRlcm5hbCB0bz1cImh0dHBzOi8vdHdpdHRlci5jb20vbWcwc3Rpc2hhXCI+dHdlZXQ8L0xpbms+LjwvcD5cbiAgICAgIDxwPkkgcG9zdCBzbmlwcGV0cyBhYm91dCB3aGF0IEknbSA8T3V0bGluZT5sZWFybmluZzwvT3V0bGluZT4gb24gPExpbmsgdG89XCJ0aWxcIj5USUw8L0xpbms+LjwvcD5cbiAgICAgIDxwPllvdSBjYW4gdmlldyBteSA8ZGVsPnVuZmluaXNoZWQgc2lkZSBwcm9qZWN0czwvZGVsPiBjb2RlIG9uIDxMaW5rIGV4dGVybmFsIHRvPVwiaHR0cHM6Ly9naXRodWIuY29tL21nb3N0aXNoYVwiPmdpdGh1YjwvTGluaz4uPC9wPlxuICAgICAgPHA+RmVlbCBmcmVlIHRvIHNlbmQgbWUgYW4gPExpbmsgZXh0ZXJuYWwgdG89XCJtYWlsdG86bWFydGluZ29zdGlzaGFAZ21haWwuY29tXCI+ZW1haWw8L0xpbms+LjwvcD5cbiAgICA8L2RpdiA+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFP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
