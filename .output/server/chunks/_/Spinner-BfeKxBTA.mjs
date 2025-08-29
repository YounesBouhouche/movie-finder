import { jsxs, jsx } from 'react/jsx-runtime';

const Spinner = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 border-4 border-gray-700 border-t-purple-500 rounded-full animate-spin" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-16 h-16 border-4 border-transparent border-r-pink-500 rounded-full animate-spin animation-delay-150" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-lg font-medium animate-pulse", children: "Loading amazing movies..." })
  ] });
};

export { Spinner as S };
//# sourceMappingURL=Spinner-BfeKxBTA.mjs.map
