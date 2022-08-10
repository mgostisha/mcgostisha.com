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
    "og:image": "https://mcgostisha-com.pages.dev/images/og-image-blog.png",
    "og:url": "https://mcgostisha-com.pages.dev/blog"
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
    "og:image": "https://mcgostisha-com.pages.dev/images/og-image-til.png",
    "og:url": "https://mcgostisha-com.pages.dev/til"
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
    description: "Homepage for Marty Gostisha"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb3JlL2luZGV4LnRzIiwgIi4uLy4uL2FwcC9jb3JlL0NvbnRlbnRNZXRhZGF0YS50c3giLCAiLi4vLi4vYXBwL3V0aWxzL2RhdGVzLnRzIiwgIi4uLy4uL2FwcC9jb3JlL0xpbmsudHN4IiwgIi4uLy4uL2FwcC9jb3JlL05hdmJhci50c3giLCAiLi4vLi4vYXBwL2NvcmUvT3V0bGluZS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy9ibG9nLyRzbHVnLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvdGlsLyRzbHVnLnRzeCIsICIuLi8uLi9hcHAvdGlsLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL3RpbC9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9tY2dvc3Rpc2hhLmNvbS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcnRpbmdvc3Rpc2hhL0RldmVsb3Blci9tY2dvc3Rpc2hhLmNvbS9hcHAvcm91dGVzL2Jsb2cvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tYXJ0aW5nb3N0aXNoYS9EZXZlbG9wZXIvbWNnb3N0aXNoYS5jb20vYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvdGlsLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvdGlsL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbWFydGluZ29zdGlzaGEvRGV2ZWxvcGVyL21jZ29zdGlzaGEuY29tL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9ibG9nLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2cvOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9ibG9nL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2dcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvdGlsLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvdGlsLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwidGlsLzpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvdGlsL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvdGlsL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwidGlsXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VDYXRjaCxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnfi9jb3JlJztcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IGRhcmtTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2RhcmsuY3NzXCI7XG5pbXBvcnQgY29yZVN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvY29yZS5jc3NcIlxuXG4vKipcbiAqIFRoZSBgbGlua3NgIGV4cG9ydCBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgbWFwIHRvXG4gKiB0aGUgYXR0cmlidXRlcyBmb3IgYW4gSFRNTCBgPGxpbms+YCBlbGVtZW50LiBUaGVzZSB3aWxsIGxvYWQgYDxsaW5rPmAgdGFncyBvblxuICogZXZlcnkgcm91dGUgaW4gdGhlIGFwcCwgYnV0IGluZGl2aWR1YWwgcm91dGVzIGNhbiBpbmNsdWRlIHRoZWlyIG93biBsaW5rc1xuICogdGhhdCBhcmUgYXV0b21hdGljYWxseSB1bmxvYWRlZCB3aGVuIGEgdXNlciBuYXZpZ2F0ZXMgYXdheSBmcm9tIHRoZSByb3V0ZS5cbiAqXG4gKiBodHRwczovL3JlbWl4LnJ1bi9hcGkvYXBwI2xpbmtzXG4gKi9cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZGFya1N0eWxlc1VybCxcbiAgICAgIG1lZGlhOiBcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxuICAgIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBjb3JlU3R5bGVzVXJsIH0sXG4gIF07XG59O1xuXG4vKipcbiAqIFRoZSByb290IG1vZHVsZSdzIGRlZmF1bHQgZXhwb3J0IGlzIGEgY29tcG9uZW50IHRoYXQgcmVuZGVycyB0aGUgY3VycmVudFxuICogcm91dGUgdmlhIHRoZSBgPE91dGxldCAvPmAgY29tcG9uZW50LiBUaGluayBvZiB0aGlzIGFzIHRoZSBnbG9iYWwgbGF5b3V0XG4gKiBjb21wb25lbnQgZm9yIHlvdXIgYXBwLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGVcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiPjwvbGluaz5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTWFydHkgR29zdGlzaGFcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkFib3V0IG1lLCBCbG9nLCBUSUwgYW5kIG1vcmVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vbWNnb3N0aXNoYS1jb20ucGFnZXMuZGV2L2ltYWdlcy9vZy1pbWFnZS1kZWZhdWx0LnBuZ1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vbWNnb3N0aXNoYS5jb21cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBtZzBzdGlzaGFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBtZzBzdGlzaGFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt9Pikge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgbGV0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgbGV0IG1lc3NhZ2U7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Pb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGNhdWdodC5kYXRhIHx8IGNhdWdodC5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfToge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICA8L2gxPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+VGhlcmUgd2FzIGFuIGVycm9yPC9oMT5cbiAgICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KGVycm9yKX08L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBIZXksIGRldmVsb3BlciwgeW91IHNob3VsZCByZXBsYWNlIHRoaXMgd2l0aCB3aGF0IHlvdSB3YW50IHlvdXJcbiAgICAgICAgICAgIHVzZXJzIHRvIHNlZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGVudE1ldGFkYXRhIH0gZnJvbSAnLi9Db250ZW50TWV0YWRhdGEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSAnLi9MaW5rJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSAnLi9OYXZiYXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPdXRsaW5lIH0gZnJvbSAnLi9PdXRsaW5lJztcblxuIiwgImltcG9ydCB7IE91dGxpbmUgfSBmcm9tIFwifi9jb3JlXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIn4vdXRpbHMvZGF0ZXNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudE1ldGFkYXRhKHsgY3JlYXRlZEF0LCB1cGRhdGVkQXQgfTogUHJvcHMpIHtcbiAgY29uc3QgY3JlYXRlZCA9IGZvcm1hdERhdGUoY3JlYXRlZEF0KTtcbiAgY29uc3QgdXBkYXRlZCA9IGZvcm1hdERhdGUodXBkYXRlZEF0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNZXRhZGF0YSBncmlkLWNvbHVtbi1wcm9zZVwiPlxuICAgICAgPHA+PE91dGxpbmU+Q3JlYXRlZDwvT3V0bGluZT4ge2NyZWF0ZWR9PC9wPlxuICAgICAge2NyZWF0ZWQgPT09IHVwZGF0ZWQgPyBudWxsIDogPHA+PE91dGxpbmU+VXBkYXRlZDwvT3V0bGluZT4ge3VwZGF0ZWR9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pLmZvcm1hdChkYXRlKTtcbn0iLCAiaW1wb3J0IHsgTGluayBhcyBSZW1peExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBleHRlcm5hbD86IGJvb2xlYW47XG4gIHRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBleHRlcm5hbCA9IGZhbHNlLCB0bywgLi4ucmVzdCB9OiBQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lID8gYGxpbmsgJHtjbGFzc05hbWV9YCA6ICdsaW5rJztcblxuICBpZiAoZXh0ZXJuYWwpIHtcbiAgICByZXR1cm4gPGEgaHJlZj17dG99IGNsYXNzTmFtZT17Y2xhc3Nlc30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPntjaGlsZHJlbn08L2E+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVtaXhMaW5rIHRvPXt0b30gY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ucmVzdH0+e2NoaWxkcmVufTwvUmVtaXhMaW5rPlxuICApO1xufSIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ34vY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRoZW1lKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcyA/ICdkYXJrJyA6ICdsaWdodCcpXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICA8TGluayB0bz1cIi9cIiBhcmlhLWxhYmVsPVwiQmFjayB0byBob21lIHBhZ2VcIj5cbiAgICAgICAgPGltZyBzcmM9e3RoZW1lID09PSAnbGlnaHQnID8gJy9pbWFnZXMvc2l0ZS1sb2dvLnN2ZycgOiAnL2ltYWdlcy9zaXRlLWxvZ28tbGlnaHQuc3ZnJ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L25hdj5cbiAgKTtcbn0iLCAiXG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91dGxpbmUoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dGxpbmVcIj57Y2hpbGRyZW59PC9zcGFuPlxuICApO1xufTtcblxuIiwgInR5cGUgUHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3RSb3V0ZShwcm9wczogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PkJhbTwvZGl2PlxuICApO1xufTtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgTGluaywgT3V0bGluZSB9IGZyb20gJ34vY29yZSc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnfi91dGlscy9kYXRlcyc7XG5cbmltcG9ydCBibG9nQ3NzVXJsIGZyb20gJ34vc3R5bGVzL3JvdXRlcy9ibG9nLmNzcyc7XG5cbnR5cGUgUG9zdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICB1cGRhdGVkX2F0OiBzdHJpbmc7XG4gIHRhZ3M6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogYmxvZ0Nzc1VybCB9LFxuICBdO1xufTtcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiYmxvZyB8IG1jZ29zdGlzaGFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCbG9nZ2luZyBhYm91dCB3ZWIgZGV2ZWxvcG1lbnQsIGVuZ2luZWVyaW5nIG1hbmFnZW1lbnQsIHRoZSBOQkEsIGFuZCBtdWNoIG1vcmUuXCIsXG4gICAgJ29nOnRpdGxlJzogXCJCbG9nXCIsXG4gICAgJ29nOmRlc2NyaXB0aW9uJzogXCJCbG9nZ2luZyBhYm91dCB3ZWIgZGV2ZWxvcG1lbnQsIGVuZ2luZWVyaW5nIG1hbmFnZW1lbnQsIHRoZSBOQkEsIGFuZCBtdWNoIG1vcmUuXCIsXG4gICAgJ29nOmltYWdlJzogXCJodHRwczovL21jZ29zdGlzaGEtY29tLnBhZ2VzLmRldi9pbWFnZXMvb2ctaW1hZ2UtYmxvZy5wbmdcIixcbiAgICAnb2c6dXJsJzogXCJodHRwczovL21jZ29zdGlzaGEtY29tLnBhZ2VzLmRldi9ibG9nXCIsXG4gIH07XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBbXTtcbn1cblxudHlwZSBCbG9nSXRlbVByb3BzID0ge1xuICBwb3N0OiBQb3N0O1xufVxuXG5mdW5jdGlvbiBCbG9nSXRlbSh7IHBvc3QgfTogQmxvZ0l0ZW1Qcm9wcykge1xuICBjb25zdCBjcmVhdGVkQXQgPSBmb3JtYXREYXRlKHBvc3QuY3JlYXRlZF9hdCk7XG4gIGNvbnN0IHVwZGF0ZWRBdCA9IGZvcm1hdERhdGUocG9zdC51cGRhdGVkX2F0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ0l0ZW1cIj5cbiAgICAgIDxMaW5rIHRvPXtgJHtwb3N0LmlkfWB9Pntwb3N0LnRpdGxlfTwvTGluaz5cbiAgICAgIDxwPntjcmVhdGVkQXQgPT09IHVwZGF0ZWRBdCA/IGNyZWF0ZWRBdCA6IGBXcml0dGVuIG9uICR7Y3JlYXRlZEF0fWB9PC9wPlxuICAgICAge3VwZGF0ZWRBdCA9PT0gY3JlYXRlZEF0ID8gbnVsbCA6IDxwPntgTGFzdCB1cGRhdGVkICR7dXBkYXRlZEF0fWB9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0luZGV4Um91dGUoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPFBvc3RbXT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZyBncmlkXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZ3JpZC1jb2x1bW4tY29udGFpbmVyXCI+PE91dGxpbmU+QmxvZzwvT3V0bGluZT48L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX19saXN0IGdyaWQtY29sdW1uLWNvbnRhaW5lclwiPlxuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5sZW5ndGggP1xuICAgICAgICAgICAgZGF0YS5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoPEJsb2dJdGVtIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pXG4gICAgICAgICAgICB9KSA6IDxwPmNvbWluZyBzb29uPC9wPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIn4vY29yZVwiO1xuaW1wb3J0IENvbnRlbnRNZXRhZGF0YSBmcm9tIFwifi9jb3JlL0NvbnRlbnRNZXRhZGF0YVwiO1xuaW1wb3J0IHsgZ2V0VElMIH0gZnJvbSBcIn4vdGlsXCI7XG5pbXBvcnQgdHlwZSB7IFRJTEl0ZW0gfSBmcm9tIFwifi90aWxcIjtcblxuaW1wb3J0IHRpbENzc1VybCBmcm9tICd+L3N0eWxlcy9yb3V0ZXMvdGlsLmNzcyc7XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiB0aWxDc3NVcmwgfSxcbiAgXTtcbn07XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaWYgKCFwYXJhbXMuc2x1ZykgcmV0dXJuIHt9O1xuICByZXR1cm4gZ2V0VElMKHBhcmFtcy5zbHVnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRJTFBvc3RSb3V0ZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8VElMSXRlbT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsU2x1ZyBncmlkXCI+XG4gICAgICA8TGluayB0bz1cIi90aWxcIiBjbGFzc05hbWU9XCJncmlkLWNvbHVtbi1jb250YWluZXJcIj5CYWNrIHRvIFRJTHM8L0xpbms+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGlsU2x1Z19fdGl0bGUgZ3JpZC1jb2x1bW4tcHJvc2VcIj57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgPENvbnRlbnRNZXRhZGF0YSBjcmVhdGVkQXQ9e2RhdGEuY3JlYXRlZF9hdH0gdXBkYXRlZEF0PXtkYXRhLnVwZGF0ZWRfYXR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbFNsdWdfX2NvbnRlbnQgZ3JpZC1jb2x1bW4tcHJvc2VcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGEuaHRtbCB8fCAnJyB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsICJpbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcGFyc2VGcm9udE1hdHRlciBmcm9tIFwiZnJvbnQtbWF0dGVyXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcbmltcG9ydCB7IG1hcmtlZCB9IGZyb20gJ21hcmtlZCc7XG5cbmV4cG9ydCB0eXBlIFRJTEl0ZW0gPSB7XG4gIHNsdWc6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICB1cGRhdGVkX2F0OiBzdHJpbmc7XG4gIGh0bWw/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0TWFya2Rvd25BdHRyaWJ1dGVzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gIHVwZGF0ZWRfYXQ6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWRQb3N0QXR0cmlidXRlcyhcbiAgYXR0cmlidXRlczogYW55XG4pOiBhdHRyaWJ1dGVzIGlzIFBvc3RNYXJrZG93bkF0dHJpYnV0ZXMge1xuICByZXR1cm4gYXR0cmlidXRlcz8udGl0bGU7XG59XG5cbmNvbnN0IHRpbFBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uLy4uL2NvbnRlbnQvdGlsXCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VElMcygpIHtcbiAgY29uc3QgZGlyID0gYXdhaXQgZnMucmVhZGRpcih0aWxQYXRoKTtcbiAgY29uc3QgdGlscyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGRpci5tYXAoYXN5bmMgZmlsZW5hbWUgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlKHBhdGguam9pbih0aWxQYXRoLCBmaWxlbmFtZSkpO1xuICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBwYXJzZUZyb250TWF0dGVyKGZpbGUudG9TdHJpbmcoKSk7XG5cblxuICAgICAgaW52YXJpYW50KGlzVmFsaWRQb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSk7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKSxcbiAgICAgICAgLi4uYXR0cmlidXRlc1xuICAgICAgfTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICk7XG4gIHJldHVybiB0aWxzLnNvcnQoKGEsIGIpID0+IChhLmNyZWF0ZWRfYXQgPiBiLmNyZWF0ZWRfYXQgPyAtMSA6IDEpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRJTChzbHVnOiBzdHJpbmcpIHtcbiAgY29uc3QgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlKHBhdGguam9pbih0aWxQYXRoLCBgJHtzbHVnfS5tZGApKTtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBib2R5IH0gPSBwYXJzZUZyb250TWF0dGVyKGZpbGUudG9TdHJpbmcoKSk7XG4gIGludmFyaWFudChpc1ZhbGlkUG9zdEF0dHJpYnV0ZXMoYXR0cmlidXRlcykpO1xuICByZXR1cm4ge1xuICAgIHNsdWcsXG4gICAgaHRtbDogbWFya2VkKGJvZHkpLFxuICAgIC4uLmF0dHJpYnV0ZXNcbiAgfTtcbn0iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbi8vIGltcG9ydCB7IGdldFRJTHMgfSBmcm9tIFwifi90aWxcIjtcbmltcG9ydCB0eXBlIHsgVElMSXRlbSB9IGZyb20gXCJ+L3RpbFwiO1xuXG5pbXBvcnQgeyBMaW5rLCBPdXRsaW5lIH0gZnJvbSAnfi9jb3JlJztcblxuaW1wb3J0IHRpbENzc1VybCBmcm9tICd+L3N0eWxlcy9yb3V0ZXMvdGlsLmNzcyc7XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiB0aWxDc3NVcmwgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcInRpbCB8IG1jZ29zdGlzaGFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTaG9ydCBzbmlwcGV0cyBvZiBjb250ZW50IEkndmUgbGVhcm5lZCByZWNlbnRseVwiLFxuICAgICdvZzp0aXRsZSc6IFwiVElMIChUb2RheSBJIExlYXJuZWQpXCIsXG4gICAgJ29nOmRlc2NyaXB0aW9uJzogXCJRdWljayBzbmlwcGV0cyBvZiB0aGluZ3MgSSd2ZSBsZWFybmVkIHJlY2VudGx5LlwiLFxuICAgICdvZzppbWFnZSc6IFwiaHR0cHM6Ly9tY2dvc3Rpc2hhLWNvbS5wYWdlcy5kZXYvaW1hZ2VzL29nLWltYWdlLXRpbC5wbmdcIixcbiAgICAnb2c6dXJsJzogXCJodHRwczovL21jZ29zdGlzaGEtY29tLnBhZ2VzLmRldi90aWxcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIFtdO1xufVxuXG50eXBlIFRJTEl0ZW1Qcm9wcyA9IHtcbiAgdGlsOiBUSUxJdGVtO1xufVxuXG5mdW5jdGlvbiBUSUxMaXN0SXRlbSh7IHRpbCB9OiBUSUxJdGVtUHJvcHMpIHtcbiAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZWRBdCA9IGZvcm1hdERhdGUobmV3IERhdGUodGlsLmNyZWF0ZWRfYXQpKTtcbiAgY29uc3QgdXBkYXRlZEF0ID0gZm9ybWF0RGF0ZShuZXcgRGF0ZSh0aWwudXBkYXRlZF9hdCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxfX2xpc3RJdGVtXCI+XG4gICAgICA8TGluayB0bz17YCR7dGlsLnNsdWd9YH0+e3RpbC50aXRsZX08L0xpbms+XG4gICAgICA8cD57Y3JlYXRlZEF0ID09PSB1cGRhdGVkQXQgPyBjcmVhdGVkQXQgOiBgV3JpdHRlbiBvbiAke2NyZWF0ZWRBdH1gfTwvcD5cbiAgICAgIHt1cGRhdGVkQXQgPT09IGNyZWF0ZWRBdCA/IG51bGwgOiA8cD57YExhc3QgdXBkYXRlZCAke3VwZGF0ZWRBdH1gfTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVElMSW5kZXhSb3V0ZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8VElMSXRlbVtdPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsIGdyaWRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJncmlkLWNvbHVtbi1jb250YWluZXJcIj48T3V0bGluZT5UPC9PdXRsaW5lPm9kYXkgPE91dGxpbmU+STwvT3V0bGluZT4gPE91dGxpbmU+TDwvT3V0bGluZT5lYXJuZWQ8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxfX2xpc3QgZ3JpZC1jb2x1bW4tY29udGFpbmVyXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLmxlbmd0aCA/XG4gICAgICAgICAgICBkYXRhLm1hcCh0aWwgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxUSUxMaXN0SXRlbSBrZXk9e3RpbC5zbHVnfSB0aWw9e3RpbH0gLz4pXG4gICAgICAgICAgICB9KSA6IDxwPmNvbWluZyBzb29uPC9wPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07IiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rLCBPdXRsaW5lIH0gZnJvbSAnfi9jb3JlJztcblxuaW1wb3J0IGluZGV4Q3NzVXJsIGZyb20gJ34vc3R5bGVzL3JvdXRlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogaW5kZXhDc3NVcmwgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcImhvbWUgfCBtY2dvc3Rpc2hhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9tZXBhZ2UgZm9yIE1hcnR5IEdvc3Rpc2hhXCJcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXggZ3JpZFwiPlxuICAgICAgPGgxPkknbSA8T3V0bGluZT5NYXJ0eTwvT3V0bGluZT4sIGFuIGVuZ2luZWVyKGluZyBtYW5hZ2VyKS48L2gxPlxuICAgICAgPHA+SSBsZWFkIHRoZSA8T3V0bGluZT53ZWIgcHJvZHVjdCB0ZWFtPC9PdXRsaW5lPiBmb3IgPExpbmsgZXh0ZXJuYWwgdG89XCJodHRwczovL2luZm8uZmxpcC5jb21cIj5GbGlwPC9MaW5rPiBhdCA8TGluayBleHRlcm5hbCB0bz1cImh0dHBzOi8vY2FyZWVycy5taWNyb3NvZnQuY29tL3VzL2VuL3NlYXJjaC1yZXN1bHRzP2tleXdvcmRzPUZsaXBncmlkXCI+TWljcm9zb2Z0PC9MaW5rPi48L3A+XG4gICAgICA8cD5JJ20gPE91dGxpbmU+d3JpdGluZzwvT3V0bGluZT4gb24gbXkgPExpbmsgdG89XCJibG9nXCI+YmxvZzwvTGluaz4uPC9wPlxuICAgICAgPHA+U29tZXRpbWVzIEkgPExpbmsgZXh0ZXJuYWwgdG89XCJodHRwczovL3R3aXR0ZXIuY29tL21nMHN0aXNoYVwiPnR3ZWV0PC9MaW5rPi48L3A+XG4gICAgICA8cD5JIHBvc3Qgc25pcHBldHMgYWJvdXQgd2hhdCBJJ20gPE91dGxpbmU+bGVhcm5pbmc8L091dGxpbmU+IG9uIDxMaW5rIHRvPVwidGlsXCI+VElMPC9MaW5rPi48L3A+XG4gICAgICA8cD5Zb3UgY2FuIHZpZXcgbXkgPGRlbD51bmZpbmlzaGVkIHNpZGUgcHJvamVjdHM8L2RlbD4gY29kZSBvbiA8TGluayBleHRlcm5hbCB0bz1cImh0dHBzOi8vZ2l0aHViLmNvbS9tZ29zdGlzaGFcIj5naXRodWI8L0xpbms+LjwvcD5cbiAgICAgIDxwPkZlZWwgZnJlZSB0byBzZW5kIG1lIGFuIDxMaW5rIGV4dGVybmFsIHRvPVwibWFpbHRvOm1hcnRpbmdvc3Rpc2hhQGdtYWlsLmNvbVwiPmVtYWlsPC9MaW5rPi48L3A+XG4gICAgPC9kaXYgPlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7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
