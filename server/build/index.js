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
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_remix3.Meta, null), /* @__PURE__ */ React2.createElement(import_remix3.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix3.Scripts, null), false));
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
var tilPath = import_path.default.join(process.cwd(), "content", "til");
async function getTILs() {
  try {
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
    return { tils: tils.sort((a, b) => a.created_at > b.created_at ? -1 : 1) };
  } catch (ex) {
    return { error: ex };
  }
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
  const data = await getTILs();
  if (data.error)
    throw data.error;
  return data.tils;
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
