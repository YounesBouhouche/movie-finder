import { jsxs, jsx } from 'react/jsx-runtime';
import * as React$2 from 'react';
import { useState as useState$2, useEffect as useEffect$1 } from 'react';
import * as tslib from 'tslib';
import * as react from 'fast-deep-equal/react';
import * as jsCookie from 'js-cookie';
import * as copyToClipboard from 'copy-to-clipboard';
import * as nanoCss from 'nano-css';
import * as cssom from 'nano-css/addon/cssom';
import * as vcssom from 'nano-css/addon/vcssom';
import * as cssToTree from 'nano-css/addon/vcssom/cssToTree';
import * as screenfull from 'screenfull';
import * as setHarmonicInterval from 'set-harmonic-interval';
import * as throttleDebounce from 'throttle-debounce';
import * as reactUniversalInterface from 'react-universal-interface';
import * as fastShallowEqual from 'fast-shallow-equal';
import * as tsEasing from 'ts-easing';
import * as scrollbarWidth from '@xobotyi/scrollbar-width';

const Search = ({ searchQuery, setSearchQuery }) => {
  return /* @__PURE__ */ jsx("div", { className: "relative max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" }),
    /* @__PURE__ */ jsx("div", { className: "relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mr-4", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: searchQuery,
          onChange: (event) => setSearchQuery(event.target.value),
          placeholder: "Search for movies...",
          className: "font-body flex-1 bg-transparent text-white placeholder-gray-400 text-lg outline-none focus:placeholder-gray-500 transition-colors duration-300"
        }
      ),
      searchQuery && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSearchQuery(""),
          className: "ml-4 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-200",
          children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }) })
  ] }) });
};
const Header = ({ searchQuery, setSearchQuery }) => {
  return /* @__PURE__ */ jsxs("header", { className: "relative text-center space-y-12 mb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-center opacity-10", children: [
      /* @__PURE__ */ jsx("div", { className: "w-96 h-96 border border-purple-500/30 rounded-full animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute w-72 h-72 border border-pink-500/20 rounded-full animate-pulse animation-delay-2000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute w-48 h-48 border border-blue-500/20 rounded-full animate-pulse animation-delay-4000" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-2 text-purple-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
        "Discover Amazing Movies"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x leading-tight", children: [
          "Find",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400", children: "Movies" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("p", { className: "font-body text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light", children: [
            "You'll ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold", children: "enjoy" }),
            " Without the Hassle"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-4 text-sm text-gray-400", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-ping" }),
              /* @__PURE__ */ jsx("span", { children: "Live" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
            /* @__PURE__ */ jsxs("a", { href: "https://www.themoviedb.org/", target: "_blank", rel: "noopener noreferrer", className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-body", children: "Powered by" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "TMDB" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-gray-500 rounded-full" }),
            /* @__PURE__ */ jsx("span", { children: "Millions of Movies" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative space-y-4", children: [
      /* @__PURE__ */ jsx(Search, { searchQuery, setSearchQuery }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Popular searches:" }),
        ["Action", "Comedy", "Drama", "Sci-Fi"].map((genre) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setSearchQuery(genre),
            className: "px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-full text-gray-300 hover:text-white transition-all duration-200 text-xs",
            children: genre
          },
          genre
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-4 pt-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-px bg-gradient-to-r from-transparent to-purple-500" }),
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "w-20 h-px bg-gradient-to-l from-transparent to-pink-500" })
    ] })
  ] });
};
function useFetch(endpoint, map = (data) => data, deps = [], baseUrl = "https://api.themoviedb.org/3/", options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmI0MDRhZjZjZGQwNTU4ZTIwN2M2YmZjZjE0NDlhNSIsIm5iZiI6MTc1NjM2MTIyMy43Mjk5OTk4LCJzdWIiOiI2OGFmZjIwN2M3MzBlOWM1MzgzOTBjMTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3KTgD-fqN2AHYr0WzIqn3IFOB4Jhe0GZK4bbw4ASITM"}`
  }
}, defaultValue) {
  const [data, setData] = useState$2(null);
  const [isLoading, setIsLoading] = useState$2(true);
  const [error, setError] = useState$2(null);
  const fetching = async () => {
    setIsLoading(true);
    try {
      const url = `${baseUrl}${endpoint}`;
      const response = await fetch(url, options);
      if (!response.ok)
        throw new Error("Failed to fetch");
      const data2 = await response.json();
      if (data2.Response === "False") {
        setError("Failed to fetch");
        setData(null);
        return;
      }
      setData(map(data2));
    } catch (error2) {
      console.log(error2);
      setError("Error fetching, please try again later");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect$1(() => {
    fetching();
  }, deps);
  return [data, error, isLoading];
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var lib = {};

var createMemo$1 = {};

const require$$1$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(React$2);

Object.defineProperty(createMemo$1, "__esModule", { value: true });
var react_1$1v = require$$1$7;
var createMemo = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return react_1$1v.useMemo(function () { return fn.apply(void 0, args); }, args);
    };
};
createMemo$1.default = createMemo;

var createReducerContext$1 = {};

Object.defineProperty(createReducerContext$1, "__esModule", { value: true });
var react_1$1u = require$$1$7;
var createReducerContext = function (reducer, defaultInitialState) {
    var context = react_1$1u.createContext(undefined);
    var providerFactory = function (props, children) { return react_1$1u.createElement(context.Provider, props, children); };
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = react_1$1u.useReducer(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = react_1$1u.useContext(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
createReducerContext$1.default = createReducerContext;

var createReducer$1 = {};

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(tslib);

var useUpdateEffect$1 = {};

var useFirstMountState$1 = {};

Object.defineProperty(useFirstMountState$1, "__esModule", { value: true });
useFirstMountState$1.useFirstMountState = void 0;
var react_1$1t = require$$1$7;
function useFirstMountState() {
    var isFirst = react_1$1t.useRef(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}
useFirstMountState$1.useFirstMountState = useFirstMountState;

Object.defineProperty(useUpdateEffect$1, "__esModule", { value: true });
var react_1$1s = require$$1$7;
var useFirstMountState_1$2 = useFirstMountState$1;
var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState_1$2.useFirstMountState();
    react_1$1s.useEffect(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
useUpdateEffect$1.default = useUpdateEffect;

Object.defineProperty(createReducer$1, "__esModule", { value: true });
var tslib_1$U = require$$0$1;
var react_1$1r = require$$1$7;
var useUpdateEffect_1$3 = tslib_1$U.__importDefault(useUpdateEffect$1);
function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = react_1$1r.useRef(initializer(initialState));
        var _a = react_1$1r.useState(ref.current), setState = _a[1];
        var dispatch = react_1$1r.useCallback(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = react_1$1r.useRef(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        useUpdateEffect_1$3.default(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
createReducer$1.default = createReducer;

var createStateContext$1 = {};

Object.defineProperty(createStateContext$1, "__esModule", { value: true });
var react_1$1q = require$$1$7;
var createStateContext = function (defaultInitialValue) {
    var context = react_1$1q.createContext(undefined);
    var providerFactory = function (props, children) { return react_1$1q.createElement(context.Provider, props, children); };
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = react_1$1q.useState(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = react_1$1q.useContext(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
createStateContext$1.default = createStateContext;

var useAsync$1 = {};

var useAsyncFn$1 = {};

var useMountedState$1 = {};

Object.defineProperty(useMountedState$1, "__esModule", { value: true });
var react_1$1p = require$$1$7;
function useMountedState() {
    var mountedRef = react_1$1p.useRef(false);
    var get = react_1$1p.useCallback(function () { return mountedRef.current; }, []);
    react_1$1p.useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return get;
}
useMountedState$1.default = useMountedState;

Object.defineProperty(useAsyncFn$1, "__esModule", { value: true });
var tslib_1$T = require$$0$1;
var react_1$1o = require$$1$7;
var useMountedState_1$5 = tslib_1$T.__importDefault(useMountedState$1);
function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = react_1$1o.useRef(0);
    var isMounted = useMountedState_1$5.default();
    var _a = react_1$1o.useState(initialState), state = _a[0], set = _a[1];
    var callback = react_1$1o.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        if (!state.loading) {
            set(function (prevState) { return (tslib_1$T.__assign(tslib_1$T.__assign({}, prevState), { loading: true })); });
        }
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}
useAsyncFn$1.default = useAsyncFn;

Object.defineProperty(useAsync$1, "__esModule", { value: true });
var tslib_1$S = require$$0$1;
var react_1$1n = require$$1$7;
var useAsyncFn_1 = tslib_1$S.__importDefault(useAsyncFn$1);
function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useAsyncFn_1.default(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    react_1$1n.useEffect(function () {
        callback();
    }, [callback]);
    return state;
}
useAsync$1.default = useAsync;

var useAsyncRetry$1 = {};

Object.defineProperty(useAsyncRetry$1, "__esModule", { value: true });
var tslib_1$R = require$$0$1;
var react_1$1m = require$$1$7;
var useAsync_1 = tslib_1$R.__importDefault(useAsync$1);
var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = react_1$1m.useState(0), attempt = _a[0], setAttempt = _a[1];
    var state = useAsync_1.default(fn, tslib_1$R.__spreadArrays(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = react_1$1m.useCallback(function () {
        if (stateLoading) {
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, tslib_1$R.__spreadArrays(deps, [stateLoading]));
    return tslib_1$R.__assign(tslib_1$R.__assign({}, state), { retry: retry });
};
useAsyncRetry$1.default = useAsyncRetry;

var useAudio$1 = {};

var createHTMLMediaHook = {};

var useSetState$1 = {};

Object.defineProperty(useSetState$1, "__esModule", { value: true });
var react_1$1l = require$$1$7;
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1$1l.useState(initialState), state = _a[0], set = _a[1];
    var setState = react_1$1l.useCallback(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, []);
    return [state, setState];
};
useSetState$1.default = useSetState;

var parseTimeRanges = {};

var hasRequiredParseTimeRanges;

function requireParseTimeRanges () {
	if (hasRequiredParseTimeRanges) return parseTimeRanges;
	hasRequiredParseTimeRanges = 1;
	Object.defineProperty(parseTimeRanges, "__esModule", { value: true });
	function parseTimeRanges$1(ranges) {
	    var result = [];
	    for (var i = 0; i < ranges.length; i++) {
	        result.push({
	            start: ranges.start(i),
	            end: ranges.end(i),
	        });
	    }
	    return result;
	}
	parseTimeRanges.default = parseTimeRanges$1;
	return parseTimeRanges;
}

var hasRequiredCreateHTMLMediaHook;

function requireCreateHTMLMediaHook () {
	if (hasRequiredCreateHTMLMediaHook) return createHTMLMediaHook;
	hasRequiredCreateHTMLMediaHook = 1;
	Object.defineProperty(createHTMLMediaHook, "__esModule", { value: true });
	var tslib_1 = require$$0$1;
	var React = tslib_1.__importStar(require$$1$7);
	var react_1 = require$$1$7;
	var useSetState_1 = tslib_1.__importDefault(useSetState$1);
	var parseTimeRanges_1 = tslib_1.__importDefault(/*@__PURE__*/ requireParseTimeRanges());
	function createHTMLMediaHook$1(tag) {
	    return function (elOrProps) {
	        var element;
	        var props;
	        if (React.isValidElement(elOrProps)) {
	            element = elOrProps;
	            props = element.props;
	        }
	        else {
	            props = elOrProps;
	        }
	        var _a = useSetState_1.default({
	            buffered: [],
	            time: 0,
	            duration: 0,
	            paused: true,
	            muted: false,
	            volume: 1,
	            playing: false,
	        }), state = _a[0], setState = _a[1];
	        var ref = react_1.useRef(null);
	        var wrapEvent = function (userEvent, proxyEvent) {
	            return function (event) {
	                try {
	                    proxyEvent && proxyEvent(event);
	                }
	                finally {
	                    userEvent && userEvent(event);
	                }
	            };
	        };
	        var onPlay = function () { return setState({ paused: false }); };
	        var onPlaying = function () { return setState({ playing: true }); };
	        var onWaiting = function () { return setState({ playing: false }); };
	        var onPause = function () { return setState({ paused: true, playing: false }); };
	        var onVolumeChange = function () {
	            var el = ref.current;
	            if (!el) {
	                return;
	            }
	            setState({
	                muted: el.muted,
	                volume: el.volume,
	            });
	        };
	        var onDurationChange = function () {
	            var el = ref.current;
	            if (!el) {
	                return;
	            }
	            var duration = el.duration, buffered = el.buffered;
	            setState({
	                duration: duration,
	                buffered: parseTimeRanges_1.default(buffered),
	            });
	        };
	        var onTimeUpdate = function () {
	            var el = ref.current;
	            if (!el) {
	                return;
	            }
	            setState({ time: el.currentTime });
	        };
	        var onProgress = function () {
	            var el = ref.current;
	            if (!el) {
	                return;
	            }
	            setState({ buffered: parseTimeRanges_1.default(el.buffered) });
	        };
	        if (element) {
	            element = React.cloneElement(element, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
	        }
	        else {
	            element = React.createElement(tag, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
	        }
	        // Some browsers return `Promise` on `.play()` and may throw errors
	        // if one tries to execute another `.play()` or `.pause()` while that
	        // promise is resolving. So we prevent that with this lock.
	        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
	        var lockPlay = false;
	        var controls = {
	            play: function () {
	                var el = ref.current;
	                if (!el) {
	                    return undefined;
	                }
	                if (!lockPlay) {
	                    var promise = el.play();
	                    var isPromise = typeof promise === 'object';
	                    if (isPromise) {
	                        lockPlay = true;
	                        var resetLock = function () {
	                            lockPlay = false;
	                        };
	                        promise.then(resetLock, resetLock);
	                    }
	                    return promise;
	                }
	                return undefined;
	            },
	            pause: function () {
	                var el = ref.current;
	                if (el && !lockPlay) {
	                    return el.pause();
	                }
	            },
	            seek: function (time) {
	                var el = ref.current;
	                if (!el || state.duration === undefined) {
	                    return;
	                }
	                time = Math.min(state.duration, Math.max(0, time));
	                el.currentTime = time;
	            },
	            volume: function (volume) {
	                var el = ref.current;
	                if (!el) {
	                    return;
	                }
	                volume = Math.min(1, Math.max(0, volume));
	                el.volume = volume;
	                setState({ volume: volume });
	            },
	            mute: function () {
	                var el = ref.current;
	                if (!el) {
	                    return;
	                }
	                el.muted = true;
	            },
	            unmute: function () {
	                var el = ref.current;
	                if (!el) {
	                    return;
	                }
	                el.muted = false;
	            },
	        };
	        react_1.useEffect(function () {
	            var el = ref.current;
	            if (!el) {
	                return;
	            }
	            setState({
	                volume: el.volume,
	                muted: el.muted,
	                paused: el.paused,
	            });
	            // Start media, if autoPlay requested.
	            if (props.autoPlay && el.paused) {
	                controls.play();
	            }
	        }, [props.src]);
	        return [element, state, controls, ref];
	    };
	}
	createHTMLMediaHook.default = createHTMLMediaHook$1;
	return createHTMLMediaHook;
}

Object.defineProperty(useAudio$1, "__esModule", { value: true });
var tslib_1$Q = require$$0$1;
var createHTMLMediaHook_1$1 = tslib_1$Q.__importDefault(/*@__PURE__*/ requireCreateHTMLMediaHook());
var useAudio = createHTMLMediaHook_1$1.default('audio');
useAudio$1.default = useAudio;

var useBattery$1 = {};

var util = {};

Object.defineProperty(util, "__esModule", { value: true });
util.isNavigator = util.isBrowser = util.off = util.on = util.noop = void 0;
var noop = function () { };
util.noop = noop;
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
util.on = on;
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
util.off = off;
util.isBrowser = "undefined" !== 'undefined';
util.isNavigator = typeof navigator !== 'undefined';

var isDeepEqual = {};

const require$$1$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(react);

var hasRequiredIsDeepEqual;

function requireIsDeepEqual () {
	if (hasRequiredIsDeepEqual) return isDeepEqual;
	hasRequiredIsDeepEqual = 1;
	Object.defineProperty(isDeepEqual, "__esModule", { value: true });
	var tslib_1 = require$$0$1;
	var react_1 = tslib_1.__importDefault(require$$1$6);
	isDeepEqual.default = react_1.default;
	return isDeepEqual;
}

Object.defineProperty(useBattery$1, "__esModule", { value: true });
var tslib_1$P = require$$0$1;
var react_1$1k = require$$1$7;
var util_1$C = util;
var isDeepEqual_1$1 = tslib_1$P.__importDefault(/*@__PURE__*/ requireIsDeepEqual());
var nav$1 = util_1$C.isNavigator ? navigator : undefined;
var isBatteryApiSupported = nav$1 && typeof nav$1.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = react_1$1k.useState({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    react_1$1k.useEffect(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !isDeepEqual_1$1.default(state, newState) && setState(newState);
        };
        nav$1.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            util_1$C.on(battery, 'chargingchange', handleChange);
            util_1$C.on(battery, 'chargingtimechange', handleChange);
            util_1$C.on(battery, 'dischargingtimechange', handleChange);
            util_1$C.on(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                util_1$C.off(battery, 'chargingchange', handleChange);
                util_1$C.off(battery, 'chargingtimechange', handleChange);
                util_1$C.off(battery, 'dischargingtimechange', handleChange);
                util_1$C.off(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
useBattery$1.default = isBatteryApiSupported ? useBattery : useBatteryMock;

var useBeforeUnload$1 = {};

Object.defineProperty(useBeforeUnload$1, "__esModule", { value: true });
var react_1$1j = require$$1$7;
var util_1$B = util;
var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = react_1$1j.useCallback(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    react_1$1j.useEffect(function () {
        if (!enabled) {
            return;
        }
        util_1$B.on(window, 'beforeunload', handler);
        return function () { return util_1$B.off(window, 'beforeunload', handler); };
    }, [enabled, handler]);
};
useBeforeUnload$1.default = useBeforeUnload;

var useBoolean = {};

var useToggle$1 = {};

Object.defineProperty(useToggle$1, "__esModule", { value: true });
var react_1$1i = require$$1$7;
var toggleReducer = function (state, nextValue) {
    return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function (initialValue) {
    return react_1$1i.useReducer(toggleReducer, initialValue);
};
useToggle$1.default = useToggle;

Object.defineProperty(useBoolean, "__esModule", { value: true });
var tslib_1$O = require$$0$1;
var useToggle_1 = tslib_1$O.__importDefault(useToggle$1);
useBoolean.default = useToggle_1.default;

var useClickAway$1 = {};

Object.defineProperty(useClickAway$1, "__esModule", { value: true });
var react_1$1h = require$$1$7;
var util_1$A = util;
var defaultEvents$1 = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents$1; }
    var savedCallback = react_1$1h.useRef(onClickAway);
    react_1$1h.useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    react_1$1h.useEffect(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            util_1$A.on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                util_1$A.off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
useClickAway$1.default = useClickAway;

var useCookie$1 = {};

const require$$2$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(jsCookie);

Object.defineProperty(useCookie$1, "__esModule", { value: true });
var tslib_1$N = require$$0$1;
var react_1$1g = require$$1$7;
var js_cookie_1 = tslib_1$N.__importDefault(require$$2$3);
var useCookie = function (cookieName) {
    var _a = react_1$1g.useState(function () { return js_cookie_1.default.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = react_1$1g.useCallback(function (newValue, options) {
        js_cookie_1.default.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = react_1$1g.useCallback(function () {
        js_cookie_1.default.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
useCookie$1.default = useCookie;

var useCopyToClipboard$1 = {};

const require$$1$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(copyToClipboard);

Object.defineProperty(useCopyToClipboard$1, "__esModule", { value: true });
var tslib_1$M = require$$0$1;
var copy_to_clipboard_1 = tslib_1$M.__importDefault(require$$1$5);
var react_1$1f = require$$1$7;
var useMountedState_1$4 = tslib_1$M.__importDefault(useMountedState$1);
var useSetState_1$1 = tslib_1$M.__importDefault(useSetState$1);
var useCopyToClipboard = function () {
    var isMounted = useMountedState_1$4.default();
    var _a = useSetState_1$1.default({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = react_1$1f.useCallback(function (value) {
        if (!isMounted()) {
            return;
        }
        var noUserInteraction;
        var normalizedValue;
        try {
            // only strings and numbers casted to strings can be copied to clipboard
            if (typeof value !== 'string' && typeof value !== 'number') {
                var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                if ("production" === 'development')
                    ;
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            // empty strings are also considered invalid
            else if (value === '') {
                var error = new Error("Cannot copy empty string to clipboard.");
                if ("production" === 'development')
                    ;
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            normalizedValue = value.toString();
            noUserInteraction = copy_to_clipboard_1.default(normalizedValue);
            setState({
                value: normalizedValue,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            setState({
                value: normalizedValue,
                error: error,
                noUserInteraction: noUserInteraction,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
useCopyToClipboard$1.default = useCopyToClipboard;

var useCounter$1 = {};

var useGetSet$1 = {};

var useUpdate$1 = {};

Object.defineProperty(useUpdate$1, "__esModule", { value: true });
var react_1$1e = require$$1$7;
var updateReducer = function (num) { return (num + 1) % 1000000; };
function useUpdate() {
    var _a = react_1$1e.useReducer(updateReducer, 0), update = _a[1];
    return update;
}
useUpdate$1.default = useUpdate;

var hookState = {};

Object.defineProperty(hookState, "__esModule", { value: true });
hookState.resolveHookState = void 0;
function resolveHookState(nextState, currentState) {
    if (typeof nextState === 'function') {
        return nextState.length ? nextState(currentState) : nextState();
    }
    return nextState;
}
hookState.resolveHookState = resolveHookState;

Object.defineProperty(useGetSet$1, "__esModule", { value: true });
var tslib_1$L = require$$0$1;
var react_1$1d = require$$1$7;
var useUpdate_1$4 = tslib_1$L.__importDefault(useUpdate$1);
var hookState_1$4 = hookState;
function useGetSet(initialState) {
    var state = react_1$1d.useRef(hookState_1$4.resolveHookState(initialState));
    var update = useUpdate_1$4.default();
    return react_1$1d.useMemo(function () { return [
        function () { return state.current; },
        function (newState) {
            state.current = hookState_1$4.resolveHookState(newState, state.current);
            update();
        },
    ]; }, []);
}
useGetSet$1.default = useGetSet;

Object.defineProperty(useCounter$1, "__esModule", { value: true });
var tslib_1$K = require$$0$1;
var react_1$1c = require$$1$7;
var useGetSet_1 = tslib_1$K.__importDefault(useGetSet$1);
var hookState_1$3 = hookState;
function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = hookState_1$3.resolveHookState(initialValue);
    typeof init !== 'number' &&
        console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = useGetSet_1.default(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        react_1$1c.useMemo(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = hookState_1$3.resolveHookState(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = hookState_1$3.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = hookState_1$3.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = hookState_1$3.resolveHookState(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}
useCounter$1.default = useCounter;

var useCss$1 = {};

const require$$1$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(nanoCss);

const require$$2$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(cssom);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vcssom);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(cssToTree);

var useIsomorphicLayoutEffect$1 = {};

Object.defineProperty(useIsomorphicLayoutEffect$1, "__esModule", { value: true });
var react_1$1b = require$$1$7;
var util_1$z = util;
var useIsomorphicLayoutEffect = util_1$z.isBrowser ? react_1$1b.useLayoutEffect : react_1$1b.useEffect;
useIsomorphicLayoutEffect$1.default = useIsomorphicLayoutEffect;

Object.defineProperty(useCss$1, "__esModule", { value: true });
var tslib_1$J = require$$0$1;
var nano_css_1 = require$$1$4;
var cssom_1 = require$$2$2;
var vcssom_1 = require$$3;
var cssToTree_1 = require$$4;
var react_1$1a = require$$1$7;
var useIsomorphicLayoutEffect_1$6 = tslib_1$J.__importDefault(useIsomorphicLayoutEffect$1);
var nano = nano_css_1.create();
cssom_1.addon(nano);
vcssom_1.addon(nano);
var counter = 0;
var useCss = function (css) {
    var className = react_1$1a.useMemo(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = react_1$1a.useMemo(function () { return new nano.VSheet(); }, []);
    useIsomorphicLayoutEffect_1$6.default(function () {
        var tree = {};
        cssToTree_1.cssToTree(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
useCss$1.default = useCss;

var useCustomCompareEffect$1 = {};

Object.defineProperty(useCustomCompareEffect$1, "__esModule", { value: true });
var react_1$19 = require$$1$7;
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    var ref = react_1$19.useRef(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    react_1$19.useEffect(effect, ref.current);
};
useCustomCompareEffect$1.default = useCustomCompareEffect;

var useDebounce$1 = {};

var useTimeoutFn$1 = {};

Object.defineProperty(useTimeoutFn$1, "__esModule", { value: true });
var react_1$18 = require$$1$7;
function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = react_1$18.useRef(false);
    var timeout = react_1$18.useRef();
    var callback = react_1$18.useRef(fn);
    var isReady = react_1$18.useCallback(function () { return ready.current; }, []);
    var set = react_1$18.useCallback(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = react_1$18.useCallback(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    react_1$18.useEffect(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    react_1$18.useEffect(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}
useTimeoutFn$1.default = useTimeoutFn;

Object.defineProperty(useDebounce$1, "__esModule", { value: true });
var tslib_1$I = require$$0$1;
var react_1$17 = require$$1$7;
var useTimeoutFn_1$1 = tslib_1$I.__importDefault(useTimeoutFn$1);
function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = useTimeoutFn_1$1.default(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    react_1$17.useEffect(reset, deps);
    return [isReady, cancel];
}
useDebounce$1.default = useDebounce;

var useDeepCompareEffect$1 = {};

Object.defineProperty(useDeepCompareEffect$1, "__esModule", { value: true });
var tslib_1$H = require$$0$1;
var useCustomCompareEffect_1$1 = tslib_1$H.__importDefault(useCustomCompareEffect$1);
var isDeepEqual_1 = tslib_1$H.__importDefault(/*@__PURE__*/ requireIsDeepEqual());
var useDeepCompareEffect = function (effect, deps) {
    useCustomCompareEffect_1$1.default(effect, deps, isDeepEqual_1.default);
};
useDeepCompareEffect$1.default = useDeepCompareEffect;

var useDefault$1 = {};

Object.defineProperty(useDefault$1, "__esModule", { value: true });
var react_1$16 = require$$1$7;
var useDefault = function (defaultValue, initialValue) {
    var _a = react_1$16.useState(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
useDefault$1.default = useDefault;

var useDrop$1 = {};

Object.defineProperty(useDrop$1, "__esModule", { value: true });
var tslib_1$G = require$$0$1;
var react_1$15 = require$$1$7;
var util_1$y = util;
var createProcess$1 = function (options) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || util_1$y.noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || util_1$y.noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (event.clipboardData) {
        var text = event.clipboardData.getData('text');
        (options.onText || util_1$y.noop)(text, event);
        return;
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var _a = react_1$15.useState(false), over = _a[0], setOverRaw = _a[1];
    var setOver = react_1$15.useCallback(setOverRaw, []);
    var process = react_1$15.useMemo(function () { return createProcess$1(options); }, [onFiles, onText, onUri]);
    react_1$15.useEffect(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        util_1$y.on(document, 'dragover', onDragOver);
        util_1$y.on(document, 'dragenter', onDragEnter);
        util_1$y.on(document, 'dragleave', onDragLeave);
        util_1$y.on(document, 'dragexit', onDragExit);
        util_1$y.on(document, 'drop', onDrop);
        if (onText) {
            util_1$y.on(document, 'paste', onPaste);
        }
        return function () {
            util_1$y.off(document, 'dragover', onDragOver);
            util_1$y.off(document, 'dragenter', onDragEnter);
            util_1$y.off(document, 'dragleave', onDragLeave);
            util_1$y.off(document, 'dragexit', onDragExit);
            util_1$y.off(document, 'drop', onDrop);
            util_1$y.off(document, 'paste', onPaste);
        };
    }, tslib_1$G.__spreadArrays([process], args));
    return { over: over };
};
useDrop$1.default = useDrop;

var useDropArea$1 = {};

Object.defineProperty(useDropArea$1, "__esModule", { value: true });
var tslib_1$F = require$$0$1;
var react_1$14 = require$$1$7;
var useMountedState_1$3 = tslib_1$F.__importDefault(useMountedState$1);
var util_1$x = util;
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || util_1$x.noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || util_1$x.noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || util_1$x.noop)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1$3.default();
    var _a = react_1$14.useState(false), over = _a[0], setOver = _a[1];
    var process = react_1$14.useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = react_1$14.useMemo(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
useDropArea$1.default = useDropArea;

var useEffectOnce$1 = {};

Object.defineProperty(useEffectOnce$1, "__esModule", { value: true });
var react_1$13 = require$$1$7;
var useEffectOnce = function (effect) {
    react_1$13.useEffect(effect, []);
};
useEffectOnce$1.default = useEffectOnce;

var useEnsuredForwardedRef$1 = {};

Object.defineProperty(useEnsuredForwardedRef$1, "__esModule", { value: true });
useEnsuredForwardedRef$1.ensuredForwardRef = void 0;
var react_1$12 = require$$1$7;
function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = react_1$12.useRef(forwardedRef && forwardedRef.current);
    react_1$12.useEffect(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
useEnsuredForwardedRef$1.default = useEnsuredForwardedRef;
function ensuredForwardRef(Component) {
    return react_1$12.forwardRef(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}
useEnsuredForwardedRef$1.ensuredForwardRef = ensuredForwardRef;

var useEvent$1 = {};

Object.defineProperty(useEvent$1, "__esModule", { value: true });
var react_1$11 = require$$1$7;
var util_1$w = util;
var defaultTarget = util_1$w.isBrowser ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    react_1$11.useEffect(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            util_1$w.on(target, name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                util_1$w.off(target, name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
useEvent$1.default = useEvent;

var useError$1 = {};

Object.defineProperty(useError$1, "__esModule", { value: true });
var react_1$10 = require$$1$7;
var useError = function () {
    var _a = react_1$10.useState(null), error = _a[0], setError = _a[1];
    react_1$10.useEffect(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = react_1$10.useCallback(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
useError$1.default = useError;

var useFavicon$1 = {};

Object.defineProperty(useFavicon$1, "__esModule", { value: true });
var react_1$$ = require$$1$7;
var useFavicon = function (href) {
    react_1$$.useEffect(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
useFavicon$1.default = useFavicon;

var useFullscreen$1 = {};

const require$$2$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(screenfull);

Object.defineProperty(useFullscreen$1, "__esModule", { value: true });
var tslib_1$E = require$$0$1;
var react_1$_ = require$$1$7;
var screenfull_1 = tslib_1$E.__importDefault(require$$2$1);
var useIsomorphicLayoutEffect_1$5 = tslib_1$E.__importDefault(useIsomorphicLayoutEffect$1);
var util_1$v = util;
var useFullscreen = function (ref, enabled, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? util_1$v.noop : _a;
    var _b = react_1$_.useState(enabled), isFullscreen = _b[0], setIsFullscreen = _b[1];
    useIsomorphicLayoutEffect_1$5.default(function () {
        if (!enabled) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            if (video === null || video === void 0 ? void 0 : video.current) {
                util_1$v.off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            }
            onClose();
        };
        var onChange = function () {
            if (screenfull_1.default.isEnabled) {
                var isScreenfullFullscreen = screenfull_1.default.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull_1.default.isEnabled) {
            try {
                screenfull_1.default.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull_1.default.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            util_1$v.on(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull_1.default.isEnabled) {
                try {
                    screenfull_1.default.off('change', onChange);
                    screenfull_1.default.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                util_1$v.off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [enabled, video, ref]);
    return isFullscreen;
};
useFullscreen$1.default = useFullscreen;

var useGeolocation$1 = {};

Object.defineProperty(useGeolocation$1, "__esModule", { value: true });
var tslib_1$D = require$$0$1;
var react_1$Z = require$$1$7;
var useGeolocation = function (options) {
    var _a = react_1$Z.useState({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (tslib_1$D.__assign(tslib_1$D.__assign({}, oldState), { loading: false, error: error })); });
    };
    react_1$Z.useEffect(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
useGeolocation$1.default = useGeolocation;

var useGetSetState$1 = {};

Object.defineProperty(useGetSetState$1, "__esModule", { value: true });
var tslib_1$C = require$$0$1;
var react_1$Y = require$$1$7;
var useUpdate_1$3 = tslib_1$C.__importDefault(useUpdate$1);
var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var update = useUpdate_1$3.default();
    var state = react_1$Y.useRef(tslib_1$C.__assign({}, initialState));
    var get = react_1$Y.useCallback(function () { return state.current; }, []);
    var set = react_1$Y.useCallback(function (patch) {
        if (!patch) {
            return;
        }
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
useGetSetState$1.default = useGetSetState;

var useHarmonicIntervalFn$1 = {};

const require$$1$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(setHarmonicInterval);

Object.defineProperty(useHarmonicIntervalFn$1, "__esModule", { value: true });
var react_1$X = require$$1$7;
var set_harmonic_interval_1 = require$$1$3;
var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = react_1$X.useRef(function () { });
    react_1$X.useEffect(function () {
        latestCallback.current = fn;
    });
    react_1$X.useEffect(function () {
        if (delay !== null) {
            var interval_1 = set_harmonic_interval_1.setHarmonicInterval(function () { return latestCallback.current(); }, delay);
            return function () { return set_harmonic_interval_1.clearHarmonicInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
useHarmonicIntervalFn$1.default = useHarmonicIntervalFn;

var useHover$1 = {};

Object.defineProperty(useHover$1, "__esModule", { value: true });
var tslib_1$B = require$$0$1;
var React$1 = tslib_1$B.__importStar(require$$1$7);
var util_1$u = util;
var useState$1 = React$1.useState;
var useHover = function (element) {
    var _a = useState$1(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || util_1$u.noop)(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || util_1$u.noop)(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = React$1.cloneElement(element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
useHover$1.default = useHover;

var useHoverDirty$1 = {};

Object.defineProperty(useHoverDirty$1, "__esModule", { value: true });
var react_1$W = require$$1$7;
var util_1$t = util;
// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    var _a = react_1$W.useState(false), value = _a[0], setValue = _a[1];
    react_1$W.useEffect(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            util_1$t.on(ref.current, 'mouseover', onMouseOver);
            util_1$t.on(ref.current, 'mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                util_1$t.off(current, 'mouseover', onMouseOver);
                util_1$t.off(current, 'mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
useHoverDirty$1.default = useHoverDirty;

var useIdle$1 = {};

const require$$1$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(throttleDebounce);

Object.defineProperty(useIdle$1, "__esModule", { value: true });
var react_1$V = require$$1$7;
var throttle_debounce_1 = require$$1$2;
var util_1$s = util;
var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = react_1$V.useState(initialState), state = _a[0], setState = _a[1];
    react_1$V.useEffect(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = throttle_debounce_1.throttle(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            util_1$s.on(window, events[i], onEvent);
        }
        util_1$s.on(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                util_1$s.off(window, events[i], onEvent);
            }
            util_1$s.off(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
useIdle$1.default = useIdle;

var useIntersection$1 = {};

Object.defineProperty(useIntersection$1, "__esModule", { value: true });
var react_1$U = require$$1$7;
var useIntersection = function (ref, options) {
    var _a = react_1$U.useState(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    react_1$U.useEffect(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
useIntersection$1.default = useIntersection;

var useInterval$1 = {};

Object.defineProperty(useInterval$1, "__esModule", { value: true });
var react_1$T = require$$1$7;
var useInterval = function (callback, delay) {
    var savedCallback = react_1$T.useRef(function () { });
    react_1$T.useEffect(function () {
        savedCallback.current = callback;
    });
    react_1$T.useEffect(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
useInterval$1.default = useInterval;

var useKey$1 = {};

Object.defineProperty(useKey$1, "__esModule", { value: true });
var tslib_1$A = require$$0$1;
var react_1$S = require$$1$7;
var useEvent_1 = tslib_1$A.__importDefault(useEvent$1);
var util_1$r = util;
var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = util_1$r.noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = react_1$S.useMemo(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    useEvent_1.default(event, useMemoHandler, target, options);
};
useKey$1.default = useKey;

var createBreakpoint$1 = {};

Object.defineProperty(createBreakpoint$1, "__esModule", { value: true });
var react_1$R = require$$1$7;
var util_1$q = util;
var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = react_1$R.useState(util_1$q.isBrowser ? window.innerWidth : 0), screen = _a[0], setScreen = _a[1];
        react_1$R.useEffect(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            util_1$q.on(window, 'resize', setSideScreen);
            return function () {
                util_1$q.off(window, 'resize', setSideScreen);
            };
        });
        var sortedBreakpoints = react_1$R.useMemo(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [breakpoints]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
createBreakpoint$1.default = createBreakpoint;

var useKeyPress$1 = {};

Object.defineProperty(useKeyPress$1, "__esModule", { value: true });
var tslib_1$z = require$$0$1;
var react_1$Q = require$$1$7;
var useKey_1 = tslib_1$z.__importDefault(useKey$1);
var useKeyPress = function (keyFilter) {
    var _a = react_1$Q.useState([false, null]), state = _a[0], set = _a[1];
    useKey_1.default(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    useKey_1.default(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
useKeyPress$1.default = useKeyPress;

var useKeyPressEvent$1 = {};

Object.defineProperty(useKeyPressEvent$1, "__esModule", { value: true });
var tslib_1$y = require$$0$1;
var useKeyPress_1 = tslib_1$y.__importDefault(useKeyPress$1);
var useUpdateEffect_1$2 = tslib_1$y.__importDefault(useUpdateEffect$1);
var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = useKeyPress_1.default; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    useUpdateEffect_1$2.default(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
useKeyPressEvent$1.default = useKeyPressEvent;

var useLatest$1 = {};

Object.defineProperty(useLatest$1, "__esModule", { value: true });
var react_1$P = require$$1$7;
var useLatest = function (value) {
    var ref = react_1$P.useRef(value);
    ref.current = value;
    return ref;
};
useLatest$1.default = useLatest;

var useLifecycles$1 = {};

Object.defineProperty(useLifecycles$1, "__esModule", { value: true });
var react_1$O = require$$1$7;
var useLifecycles = function (mount, unmount) {
    react_1$O.useEffect(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
useLifecycles$1.default = useLifecycles;

var useList$1 = {};

Object.defineProperty(useList$1, "__esModule", { value: true });
var tslib_1$x = require$$0$1;
var react_1$N = require$$1$7;
var useUpdate_1$2 = tslib_1$x.__importDefault(useUpdate$1);
var hookState_1$2 = hookState;
function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = react_1$N.useRef(hookState_1$2.resolveHookState(initialList));
    var update = useUpdate_1$2.default();
    var actions = react_1$N.useMemo(function () {
        var a = {
            set: function (newList) {
                list.current = hookState_1$2.resolveHookState(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(hookState_1$2.resolveHookState(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
useList$1.default = useList;

var useLocalStorage$1 = {};

Object.defineProperty(useLocalStorage$1, "__esModule", { value: true });
var react_1$M = require$$1$7;
var util_1$p = util;
var useLocalStorage = function (key, initialValue, options) {
    if (!util_1$p.isBrowser) {
        return [initialValue, util_1$p.noop, util_1$p.noop];
    }
    if (!key) {
        throw new Error('useLocalStorage key may not be falsy');
    }
    var deserializer = options
        ? options.raw
            ? function (value) { return value; }
            : options.deserializer
        : JSON.parse;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var initializer = react_1$M.useRef(function (key) {
        try {
            var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = react_1$M.useState(function () { return initializer.current(key); }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react_1$M.useLayoutEffect(function () { return setState(initializer.current(key)); }, [key]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var set = react_1$M.useCallback(function (valOrFunc) {
        try {
            var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
            if (typeof newState === 'undefined')
                return;
            var value = void 0;
            if (options)
                if (options.raw)
                    if (typeof newState === 'string')
                        value = newState;
                    else
                        value = JSON.stringify(newState);
                else if (options.serializer)
                    value = options.serializer(newState);
                else
                    value = JSON.stringify(newState);
            else
                value = JSON.stringify(newState);
            localStorage.setItem(key, value);
            setState(deserializer(value));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [key, setState]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var remove = react_1$M.useCallback(function () {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw.
        }
    }, [key, setState]);
    return [state, set, remove];
};
useLocalStorage$1.default = useLocalStorage;

var useLocation = {};

Object.defineProperty(useLocation, "__esModule", { value: true });
var react_1$L = require$$1$7;
var util_1$o = util;
var patchHistoryMethod = function (method) {
    var history = window.history;
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (util_1$o.isBrowser) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var _a = window.history, state = _a.state, length = _a.length;
    var _b = window.location, hash = _b.hash, host = _b.host, hostname = _b.hostname, href = _b.href, origin = _b.origin, pathname = _b.pathname, port = _b.port, protocol = _b.protocol, search = _b.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = react_1$L.useState(buildState('load')), state = _a[0], setState = _a[1];
    react_1$L.useEffect(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        util_1$o.on(window, 'popstate', onPopstate);
        util_1$o.on(window, 'pushstate', onPushstate);
        util_1$o.on(window, 'replacestate', onReplacestate);
        return function () {
            util_1$o.off(window, 'popstate', onPopstate);
            util_1$o.off(window, 'pushstate', onPushstate);
            util_1$o.off(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
useLocation.default = util_1$o.isBrowser && hasEventConstructor ? useLocationBrowser : useLocationServer;

var useLockBodyScroll = {};

Object.defineProperty(useLockBodyScroll, "__esModule", { value: true });
useLockBodyScroll.getClosestBody = void 0;
var react_1$K = require$$1$7;
var util_1$n = util;
function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
useLockBodyScroll.getClosestBody = getClosestBody;
function preventDefault$1(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = util_1$n.isBrowser &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
useLockBodyScroll.default = !doc
    ? function useLockBodyMock(_locked, _elementRef) {
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        var bodyRef = react_1$K.useRef(doc.body);
        elementRef = elementRef || bodyRef;
        var lock = function (body) {
            var bodyInfo = bodies.get(body);
            if (!bodyInfo) {
                bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                if (isIosDevice) {
                    if (!documentListenerAdded) {
                        util_1$n.on(document, 'touchmove', preventDefault$1, { passive: false });
                        documentListenerAdded = true;
                    }
                }
                else {
                    body.style.overflow = 'hidden';
                }
            }
            else {
                bodies.set(body, {
                    counter: bodyInfo.counter + 1,
                    initialOverflow: bodyInfo.initialOverflow,
                });
            }
        };
        var unlock = function (body) {
            var bodyInfo = bodies.get(body);
            if (bodyInfo) {
                if (bodyInfo.counter === 1) {
                    bodies.delete(body);
                    if (isIosDevice) {
                        body.ontouchmove = null;
                        if (documentListenerAdded) {
                            util_1$n.off(document, 'touchmove', preventDefault$1);
                            documentListenerAdded = false;
                        }
                    }
                    else {
                        body.style.overflow = bodyInfo.initialOverflow;
                    }
                }
                else {
                    bodies.set(body, {
                        counter: bodyInfo.counter - 1,
                        initialOverflow: bodyInfo.initialOverflow,
                    });
                }
            }
        };
        react_1$K.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            if (locked) {
                lock(body);
            }
            else {
                unlock(body);
            }
        }, [locked, elementRef.current]);
        // clean up, on un-mount
        react_1$K.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            return function () {
                unlock(body);
            };
        }, []);
    };

var useLogger$1 = {};

Object.defineProperty(useLogger$1, "__esModule", { value: true });
var tslib_1$w = require$$0$1;
var useEffectOnce_1$4 = tslib_1$w.__importDefault(useEffectOnce$1);
var useUpdateEffect_1$1 = tslib_1$w.__importDefault(useUpdateEffect$1);
var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    useEffectOnce_1$4.default(function () {
        console.log.apply(console, tslib_1$w.__spreadArrays([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    useUpdateEffect_1$1.default(function () {
        console.log.apply(console, tslib_1$w.__spreadArrays([componentName + " updated"], rest));
    });
};
useLogger$1.default = useLogger;

var useLongPress$1 = {};

Object.defineProperty(useLongPress$1, "__esModule", { value: true });
var react_1$J = require$$1$7;
var util_1$m = util;
var isTouchEvent = function (ev) {
    return 'touches' in ev;
};
var preventDefault = function (ev) {
    if (!isTouchEvent(ev))
        return;
    if (ev.touches.length < 2 && ev.preventDefault) {
        ev.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = react_1$J.useRef();
    var target = react_1$J.useRef();
    var start = react_1$J.useCallback(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            util_1$m.on(event.target, 'touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay, isPreventDefault]);
    var clear = react_1$J.useCallback(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            util_1$m.off(target.current, 'touchend', preventDefault);
        }
    }, [isPreventDefault]);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
useLongPress$1.default = useLongPress;

var useMap$1 = {};

Object.defineProperty(useMap$1, "__esModule", { value: true });
var tslib_1$v = require$$0$1;
var react_1$I = require$$1$7;
var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = react_1$I.useState(initialMap), map = _a[0], set = _a[1];
    var stableActions = react_1$I.useMemo(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (tslib_1$v.__assign(tslib_1$v.__assign({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key; _a[_b]; var rest = tslib_1$v.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = tslib_1$v.__assign({ get: react_1$I.useCallback(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
useMap$1.default = useMap;

var useMedia$1 = {};

Object.defineProperty(useMedia$1, "__esModule", { value: true });
var react_1$H = require$$1$7;
var util_1$l = util;
var getInitialState = function (query, defaultState) {
    // Prevent a React hydration mismatch when a default value is provided by not defaulting to window.matchMedia(query).matches.
    if (defaultState !== undefined) {
        return defaultState;
    }
    if (util_1$l.isBrowser) {
        return window.matchMedia(query).matches;
    }
    return false;
};
var useMedia = function (query, defaultState) {
    var _a = react_1$H.useState(getInitialState(query, defaultState)), state = _a[0], setState = _a[1];
    react_1$H.useEffect(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addEventListener('change', onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeEventListener('change', onChange);
        };
    }, [query]);
    return state;
};
useMedia$1.default = useMedia;

var useMediaDevices$1 = {};

Object.defineProperty(useMediaDevices$1, "__esModule", { value: true });
var react_1$G = require$$1$7;
var util_1$k = util;
var useMediaDevices = function () {
    var _a = react_1$G.useState({}), state = _a[0], setState = _a[1];
    react_1$G.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({
                                deviceId: deviceId,
                                groupId: groupId,
                                kind: kind,
                                label: label,
                            });
                        }),
                    });
                }
            })
                .catch(util_1$k.noop);
        };
        util_1$k.on(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1$k.off(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
useMediaDevices$1.default = util_1$k.isNavigator && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock;

var useMediatedState$1 = {};

Object.defineProperty(useMediatedState$1, "__esModule", { value: true });
useMediatedState$1.useMediatedState = void 0;
var react_1$F = require$$1$7;
function useMediatedState(mediator, initialState) {
    var mediatorFn = react_1$F.useRef(mediator);
    var _a = react_1$F.useState(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = react_1$F.useCallback(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}
useMediatedState$1.useMediatedState = useMediatedState;

var useMethods$1 = {};

Object.defineProperty(useMethods$1, "__esModule", { value: true });
var react_1$E = require$$1$7;
var useMethods = function (createMethods, initialState) {
    var reducer = react_1$E.useMemo(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = react_1$E.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = react_1$E.useMemo(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
useMethods$1.default = useMethods;

var useMotion$1 = {};

Object.defineProperty(useMotion$1, "__esModule", { value: true });
var react_1$D = require$$1$7;
var util_1$j = util;
var defaultState$2 = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState$2; }
    var _a = react_1$D.useState(initialState), state = _a[0], setState = _a[1];
    react_1$D.useEffect(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        util_1$j.on(window, 'devicemotion', handler);
        return function () {
            util_1$j.off(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
useMotion$1.default = useMotion;

var useMount$1 = {};

Object.defineProperty(useMount$1, "__esModule", { value: true });
var tslib_1$u = require$$0$1;
var useEffectOnce_1$3 = tslib_1$u.__importDefault(useEffectOnce$1);
var useMount = function (fn) {
    useEffectOnce_1$3.default(function () {
        fn();
    });
};
useMount$1.default = useMount;

var useMouse$1 = {};

var useRafState$1 = {};

var useUnmount$1 = {};

Object.defineProperty(useUnmount$1, "__esModule", { value: true });
var tslib_1$t = require$$0$1;
var react_1$C = require$$1$7;
var useEffectOnce_1$2 = tslib_1$t.__importDefault(useEffectOnce$1);
var useUnmount = function (fn) {
    var fnRef = react_1$C.useRef(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    useEffectOnce_1$2.default(function () { return function () { return fnRef.current(); }; });
};
useUnmount$1.default = useUnmount;

Object.defineProperty(useRafState$1, "__esModule", { value: true });
var tslib_1$s = require$$0$1;
var react_1$B = require$$1$7;
var useUnmount_1$2 = tslib_1$s.__importDefault(useUnmount$1);
var useRafState = function (initialState) {
    var frame = react_1$B.useRef(0);
    var _a = react_1$B.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = react_1$B.useCallback(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    useUnmount_1$2.default(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
useRafState$1.default = useRafState;

Object.defineProperty(useMouse$1, "__esModule", { value: true });
var tslib_1$r = require$$0$1;
var react_1$A = require$$1$7;
var useRafState_1$3 = tslib_1$r.__importDefault(useRafState$1);
var util_1$i = util;
var useMouse = function (ref) {
    var _a = useRafState_1$3.default({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    react_1$A.useEffect(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        util_1$i.on(document, 'mousemove', moveHandler);
        return function () {
            util_1$i.off(document, 'mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
useMouse$1.default = useMouse;

var useMouseHovered$1 = {};

Object.defineProperty(useMouseHovered$1, "__esModule", { value: true });
var tslib_1$q = require$$0$1;
var useHoverDirty_1 = tslib_1$q.__importDefault(useHoverDirty$1);
var useMouse_1 = tslib_1$q.__importDefault(useMouse$1);
var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = useHoverDirty_1.default(ref, whenHovered);
    var state = useMouse_1.default(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
useMouseHovered$1.default = useMouseHovered;

var useMouseWheel = {};

Object.defineProperty(useMouseWheel, "__esModule", { value: true });
var react_1$z = require$$1$7;
var util_1$h = util;
useMouseWheel.default = (function () {
    var _a = react_1$z.useState(0), mouseWheelScrolled = _a[0], setMouseWheelScrolled = _a[1];
    react_1$z.useEffect(function () {
        var updateScroll = function (e) {
            setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
        };
        util_1$h.on(window, 'wheel', updateScroll, false);
        return function () { return util_1$h.off(window, 'wheel', updateScroll); };
    });
    return mouseWheelScrolled;
});

var useNetworkState$1 = {};

Object.defineProperty(useNetworkState$1, "__esModule", { value: true });
var react_1$y = require$$1$7;
var util_1$g = util;
var nav = util_1$g.isNavigator ? navigator : undefined;
var conn = nav && (nav.connection || nav.mozConnection || nav.webkitConnection);
function getConnectionState(previousState) {
    var online = nav === null || nav === void 0 ? void 0 : nav.onLine;
    var previousOnline = previousState === null || previousState === void 0 ? void 0 : previousState.online;
    return {
        online: online,
        previous: previousOnline,
        since: online !== previousOnline ? new Date() : previousState === null || previousState === void 0 ? void 0 : previousState.since,
        downlink: conn === null || conn === void 0 ? void 0 : conn.downlink,
        downlinkMax: conn === null || conn === void 0 ? void 0 : conn.downlinkMax,
        effectiveType: conn === null || conn === void 0 ? void 0 : conn.effectiveType,
        rtt: conn === null || conn === void 0 ? void 0 : conn.rtt,
        saveData: conn === null || conn === void 0 ? void 0 : conn.saveData,
        type: conn === null || conn === void 0 ? void 0 : conn.type,
    };
}
function useNetworkState(initialState) {
    var _a = react_1$y.useState(initialState !== null && initialState !== void 0 ? initialState : getConnectionState), state = _a[0], setState = _a[1];
    react_1$y.useEffect(function () {
        var handleStateChange = function () {
            setState(getConnectionState);
        };
        util_1$g.on(window, 'online', handleStateChange, { passive: true });
        util_1$g.on(window, 'offline', handleStateChange, { passive: true });
        if (conn) {
            util_1$g.on(conn, 'change', handleStateChange, { passive: true });
        }
        return function () {
            util_1$g.off(window, 'online', handleStateChange);
            util_1$g.off(window, 'offline', handleStateChange);
            if (conn) {
                util_1$g.off(conn, 'change', handleStateChange);
            }
        };
    }, []);
    return state;
}
useNetworkState$1.default = useNetworkState;

var useNumber = {};

Object.defineProperty(useNumber, "__esModule", { value: true });
var tslib_1$p = require$$0$1;
var useCounter_1 = tslib_1$p.__importDefault(useCounter$1);
useNumber.default = useCounter_1.default;

var useObservable$1 = {};

Object.defineProperty(useObservable$1, "__esModule", { value: true });
var tslib_1$o = require$$0$1;
var react_1$x = require$$1$7;
var useIsomorphicLayoutEffect_1$4 = tslib_1$o.__importDefault(useIsomorphicLayoutEffect$1);
function useObservable(observable$, initialValue) {
    var _a = react_1$x.useState(initialValue), value = _a[0], update = _a[1];
    useIsomorphicLayoutEffect_1$4.default(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
useObservable$1.default = useObservable;

var useOrientation$1 = {};

Object.defineProperty(useOrientation$1, "__esModule", { value: true });
var react_1$w = require$$1$7;
var util_1$f = util;
var defaultState$1 = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState$1; }
    var _a = react_1$w.useState(initialState), state = _a[0], setState = _a[1];
    react_1$w.useEffect(function () {
        var screen = window.screen;
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation !== undefined) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        util_1$f.on(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1$f.off(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
useOrientation$1.default = useOrientation;

var usePageLeave$1 = {};

Object.defineProperty(usePageLeave$1, "__esModule", { value: true });
var react_1$v = require$$1$7;
var util_1$e = util;
var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    react_1$v.useEffect(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        util_1$e.on(document, 'mouseout', handler);
        return function () {
            util_1$e.off(document, 'mouseout', handler);
        };
    }, args);
};
usePageLeave$1.default = usePageLeave;

var usePermission$1 = {};

Object.defineProperty(usePermission$1, "__esModule", { value: true });
var react_1$u = require$$1$7;
var util_1$d = util;
// const usePermission = <T extends PermissionDescriptor>(permissionDesc: T): IState => {
var usePermission = function (permissionDesc) {
    var _a = react_1$u.useState(''), state = _a[0], setState = _a[1];
    react_1$u.useEffect(function () {
        var mounted = true;
        var permissionStatus = null;
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(function () { var _a; return (_a = permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.state) !== null && _a !== void 0 ? _a : ''; });
        };
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            util_1$d.on(permissionStatus, 'change', onChange);
            onChange();
        })
            .catch(util_1$d.noop);
        return function () {
            permissionStatus && util_1$d.off(permissionStatus, 'change', onChange);
            mounted = false;
            permissionStatus = null;
        };
    }, [permissionDesc]);
    return state;
};
usePermission$1.default = usePermission;

var usePrevious$1 = {};

Object.defineProperty(usePrevious$1, "__esModule", { value: true });
var react_1$t = require$$1$7;
function usePrevious(state) {
    var ref = react_1$t.useRef();
    react_1$t.useEffect(function () {
        ref.current = state;
    });
    return ref.current;
}
usePrevious$1.default = usePrevious;

var usePreviousDistinct$1 = {};

Object.defineProperty(usePreviousDistinct$1, "__esModule", { value: true });
var react_1$s = require$$1$7;
var useFirstMountState_1$1 = useFirstMountState$1;
var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = react_1$s.useRef();
    var curRef = react_1$s.useRef(value);
    var isFirstMount = useFirstMountState_1$1.useFirstMountState();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}
usePreviousDistinct$1.default = usePreviousDistinct;

var usePromise$1 = {};

Object.defineProperty(usePromise$1, "__esModule", { value: true });
var tslib_1$n = require$$0$1;
var react_1$r = require$$1$7;
var useMountedState_1$2 = tslib_1$n.__importDefault(useMountedState$1);
var usePromise = function () {
    var isMounted = useMountedState_1$2.default();
    return react_1$r.useCallback(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
usePromise$1.default = usePromise;

var useQueue$1 = {};

Object.defineProperty(useQueue$1, "__esModule", { value: true });
var tslib_1$m = require$$0$1;
var react_1$q = require$$1$7;
var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = react_1$q.useState(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return tslib_1$m.__spreadArrays(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
useQueue$1.default = useQueue;

var useRaf$1 = {};

Object.defineProperty(useRaf$1, "__esModule", { value: true });
var tslib_1$l = require$$0$1;
var react_1$p = require$$1$7;
var useIsomorphicLayoutEffect_1$3 = tslib_1$l.__importDefault(useIsomorphicLayoutEffect$1);
var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = react_1$p.useState(0), elapsed = _a[0], set = _a[1];
    useIsomorphicLayoutEffect_1$3.default(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
useRaf$1.default = useRaf;

var useRafLoop$1 = {};

Object.defineProperty(useRafLoop$1, "__esModule", { value: true });
var react_1$o = require$$1$7;
function useRafLoop(callback, initiallyActive) {
    if (initiallyActive === void 0) { initiallyActive = true; }
    var raf = react_1$o.useRef(null);
    var rafActivity = react_1$o.useRef(false);
    var rafCallback = react_1$o.useRef(callback);
    rafCallback.current = callback;
    var step = react_1$o.useCallback(function (time) {
        if (rafActivity.current) {
            rafCallback.current(time);
            raf.current = requestAnimationFrame(step);
        }
    }, []);
    var result = react_1$o.useMemo(function () {
        return [
            function () {
                // stop
                if (rafActivity.current) {
                    rafActivity.current = false;
                    raf.current && cancelAnimationFrame(raf.current);
                }
            },
            function () {
                // start
                if (!rafActivity.current) {
                    rafActivity.current = true;
                    raf.current = requestAnimationFrame(step);
                }
            },
            function () { return rafActivity.current; },
        ];
    }, []);
    react_1$o.useEffect(function () {
        if (initiallyActive) {
            result[1]();
        }
        return result[0];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return result;
}
useRafLoop$1.default = useRafLoop;

var useSearchParam$1 = {};

Object.defineProperty(useSearchParam$1, "__esModule", { value: true });
var react_1$n = require$$1$7;
var util_1$c = util;
var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var location = window.location;
    var _a = react_1$n.useState(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    react_1$n.useEffect(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        util_1$c.on(window, 'popstate', onChange);
        util_1$c.on(window, 'pushstate', onChange);
        util_1$c.on(window, 'replacestate', onChange);
        return function () {
            util_1$c.off(window, 'popstate', onChange);
            util_1$c.off(window, 'pushstate', onChange);
            util_1$c.off(window, 'replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
useSearchParam$1.default = util_1$c.isBrowser ? useSearchParam : useSearchParamServer;

var useScratch$1 = {};

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(reactUniversalInterface);

Object.defineProperty(useScratch$1, "__esModule", { value: true });
useScratch$1.ScratchSensor = void 0;
var tslib_1$k = require$$0$1;
var react_1$m = require$$1$7;
var react_universal_interface_1 = require$$2;
var useLatest_1 = tslib_1$k.__importDefault(useLatest$1);
var util_1$b = util;
var useScratch = function (params) {
    if (params === void 0) { params = {}; }
    var disabled = params.disabled;
    var paramsRef = useLatest_1.default(params);
    var _a = react_1$m.useState({ isScratching: false }), state = _a[0], setState = _a[1];
    var refState = react_1$m.useRef(state);
    var refScratching = react_1$m.useRef(false);
    var refAnimationFrame = react_1$m.useRef(null);
    var _b = react_1$m.useState(null), el = _b[0], setEl = _b[1];
    react_1$m.useEffect(function () {
        if (disabled)
            return;
        if (!el)
            return;
        var onMoveEvent = function (docX, docY) {
            cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = requestAnimationFrame(function () {
                var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
                var elX = left + window.scrollX;
                var elY = top + window.scrollY;
                var x = docX - elX;
                var y = docY - elY;
                setState(function (oldState) {
                    var newState = tslib_1$k.__assign(tslib_1$k.__assign({}, oldState), { dx: x - (oldState.x || 0), dy: y - (oldState.y || 0), end: Date.now(), isScratching: true });
                    refState.current = newState;
                    (paramsRef.current.onScratch || util_1$b.noop)(newState);
                    return newState;
                });
            });
        };
        var onMouseMove = function (event) {
            onMoveEvent(event.pageX, event.pageY);
        };
        var onTouchMove = function (event) {
            onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        var onMouseUp;
        var onTouchEnd;
        var stopScratching = function () {
            if (!refScratching.current)
                return;
            refScratching.current = false;
            refState.current = tslib_1$k.__assign(tslib_1$k.__assign({}, refState.current), { isScratching: false });
            (paramsRef.current.onScratchEnd || util_1$b.noop)(refState.current);
            setState({ isScratching: false });
            util_1$b.off(window, 'mousemove', onMouseMove);
            util_1$b.off(window, 'touchmove', onTouchMove);
            util_1$b.off(window, 'mouseup', onMouseUp);
            util_1$b.off(window, 'touchend', onTouchEnd);
        };
        onMouseUp = stopScratching;
        onTouchEnd = stopScratching;
        var startScratching = function (docX, docY) {
            if (!refScratching.current)
                return;
            var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
            var elX = left + window.scrollX;
            var elY = top + window.scrollY;
            var x = docX - elX;
            var y = docY - elY;
            var time = Date.now();
            var newState = {
                isScratching: true,
                start: time,
                end: time,
                docX: docX,
                docY: docY,
                x: x,
                y: y,
                dx: 0,
                dy: 0,
                elH: el.offsetHeight,
                elW: el.offsetWidth,
                elX: elX,
                elY: elY,
            };
            refState.current = newState;
            (paramsRef.current.onScratchStart || util_1$b.noop)(newState);
            setState(newState);
            util_1$b.on(window, 'mousemove', onMouseMove);
            util_1$b.on(window, 'touchmove', onTouchMove);
            util_1$b.on(window, 'mouseup', onMouseUp);
            util_1$b.on(window, 'touchend', onTouchEnd);
        };
        var onMouseDown = function (event) {
            refScratching.current = true;
            startScratching(event.pageX, event.pageY);
        };
        var onTouchStart = function (event) {
            refScratching.current = true;
            startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        util_1$b.on(el, 'mousedown', onMouseDown);
        util_1$b.on(el, 'touchstart', onTouchStart);
        return function () {
            util_1$b.off(el, 'mousedown', onMouseDown);
            util_1$b.off(el, 'touchstart', onTouchStart);
            util_1$b.off(window, 'mousemove', onMouseMove);
            util_1$b.off(window, 'touchmove', onTouchMove);
            util_1$b.off(window, 'mouseup', onMouseUp);
            util_1$b.off(window, 'touchend', onTouchEnd);
            if (refAnimationFrame.current)
                cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = null;
            refScratching.current = false;
            refState.current = { isScratching: false };
            setState(refState.current);
        };
    }, [el, disabled, paramsRef]);
    return [setEl, state];
};
var ScratchSensor = function (props) {
    props.children; var params = tslib_1$k.__rest(props, ["children"]);
    var _a = useScratch(params), ref = _a[0], state = _a[1];
    var element = react_universal_interface_1.render(props, state);
    return react_1$m.cloneElement(element, tslib_1$k.__assign(tslib_1$k.__assign({}, element.props), { ref: function (el) {
            if (element.props.ref) {
                if (typeof element.props.ref === 'object')
                    element.props.ref.current = el;
                if (typeof element.props.ref === 'function')
                    element.props.ref(el);
            }
            ref(el);
        } }));
};
useScratch$1.ScratchSensor = ScratchSensor;
useScratch$1.default = useScratch;

var useScroll$1 = {};

Object.defineProperty(useScroll$1, "__esModule", { value: true });
var tslib_1$j = require$$0$1;
var react_1$l = require$$1$7;
var useRafState_1$2 = tslib_1$j.__importDefault(useRafState$1);
var util_1$a = util;
var useScroll = function (ref) {
    var _a = useRafState_1$2.default({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    react_1$l.useEffect(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            util_1$a.on(ref.current, 'scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                util_1$a.off(ref.current, 'scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
useScroll$1.default = useScroll;

var useScrolling$1 = {};

Object.defineProperty(useScrolling$1, "__esModule", { value: true });
var react_1$k = require$$1$7;
var util_1$9 = util;
var useScrolling = function (ref) {
    var _a = react_1$k.useState(false), scrolling = _a[0], setScrolling = _a[1];
    react_1$k.useEffect(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            util_1$9.on(ref.current, 'scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    util_1$9.off(ref.current, 'scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
useScrolling$1.default = useScrolling;

var useSessionStorage$1 = {};

Object.defineProperty(useSessionStorage$1, "__esModule", { value: true });
var react_1$j = require$$1$7;
var util_1$8 = util;
var useSessionStorage = function (key, initialValue, raw) {
    if (!util_1$8.isBrowser) {
        return [initialValue, function () { }];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = react_1$j.useState(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react_1$j.useEffect(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
useSessionStorage$1.default = useSessionStorage;

var useShallowCompareEffect$1 = {};

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(fastShallowEqual);

Object.defineProperty(useShallowCompareEffect$1, "__esModule", { value: true });
var tslib_1$i = require$$0$1;
var fast_shallow_equal_1 = require$$1$1;
var useCustomCompareEffect_1 = tslib_1$i.__importDefault(useCustomCompareEffect$1);
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return fast_shallow_equal_1.equal(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    useCustomCompareEffect_1.default(effect, deps, shallowEqualDepsList);
};
useShallowCompareEffect$1.default = useShallowCompareEffect;

var useSize$1 = {};

Object.defineProperty(useSize$1, "__esModule", { value: true });
var tslib_1$h = require$$0$1;
var React = tslib_1$h.__importStar(require$$1$7);
var util_1$7 = util;
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!util_1$7.isBrowser) {
        return [
            typeof element === 'function' ? element({ width: width, height: height }) : element,
            { width: width, height: height },
        ];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        util_1$7.on(windowToListenOn, 'resize', setSize);
        DRAF(setSize);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                util_1$7.on(iframe, 'load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            util_1$7.off(iframe, 'load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                util_1$7.off(window, 'resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = React.cloneElement.apply(React, tslib_1$h.__spreadArrays([element, { style: style }], tslib_1$h.__spreadArrays([
        React.createElement('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], React.Children.toArray(element.props.children))));
    return [sized, state];
};
useSize$1.default = useSize;

var useSlider$1 = {};

Object.defineProperty(useSlider$1, "__esModule", { value: true });
var tslib_1$g = require$$0$1;
var react_1$i = require$$1$7;
var util_1$6 = util;
var useMountedState_1$1 = tslib_1$g.__importDefault(useMountedState$1);
var useSetState_1 = tslib_1$g.__importDefault(useSetState$1);
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = useMountedState_1$1.default();
    var isSliding = react_1$i.useRef(false);
    var valueRef = react_1$i.useRef(0);
    var frame = react_1$i.useRef(0);
    var _a = useSetState_1.default({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    valueRef.current = state.value;
    react_1$i.useEffect(function () {
        if (util_1$6.isBrowser) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || util_1$6.noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || util_1$6.noop)(valueRef.current);
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                util_1$6.on(document, 'mousemove', onMouseMove_1);
                util_1$6.on(document, 'mouseup', stopScrubbing_1);
                util_1$6.on(document, 'touchmove', onTouchMove_1);
                util_1$6.on(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                util_1$6.off(document, 'mousemove', onMouseMove_1);
                util_1$6.off(document, 'mouseup', stopScrubbing_1);
                util_1$6.off(document, 'touchmove', onTouchMove_1);
                util_1$6.off(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || util_1$6.noop)(value);
                    }
                });
            };
            util_1$6.on(ref.current, 'mousedown', onMouseDown_1);
            util_1$6.on(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                util_1$6.off(ref.current, 'mousedown', onMouseDown_1);
                util_1$6.off(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
useSlider$1.default = useSlider;

var useSpeech$1 = {};

Object.defineProperty(useSpeech$1, "__esModule", { value: true });
var tslib_1$f = require$$0$1;
var react_1$h = require$$1$7;
var Status;
(function (Status) {
    Status[Status["init"] = 0] = "init";
    Status[Status["play"] = 1] = "play";
    Status[Status["pause"] = 2] = "pause";
    Status[Status["end"] = 3] = "end";
})(Status || (Status = {}));
var useSpeech = function (text, options) {
    var mounted = react_1$h.useRef(false);
    var _a = react_1$h.useState(function () {
        var _a = options.voice || {}, _b = _a.lang, lang = _b === void 0 ? 'default' : _b, _c = _a.name, name = _c === void 0 ? '' : _c;
        return {
            isPlaying: false,
            status: Status[Status.init],
            lang: options.lang || 'default',
            voiceInfo: { lang: lang, name: name },
            rate: options.rate || 1,
            pitch: options.pitch || 1,
            volume: options.volume || 1,
        };
    }), state = _a[0], setState = _a[1];
    var handlePlay = react_1$h.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1$f.__assign(tslib_1$f.__assign({}, preState), { isPlaying: true, status: Status[Status.play] });
        });
    }, []);
    var handlePause = react_1$h.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1$f.__assign(tslib_1$f.__assign({}, preState), { isPlaying: false, status: Status[Status.pause] });
        });
    }, []);
    var handleEnd = react_1$h.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1$f.__assign(tslib_1$f.__assign({}, preState), { isPlaying: false, status: Status[Status.end] });
        });
    }, []);
    react_1$h.useEffect(function () {
        mounted.current = true;
        var utterance = new SpeechSynthesisUtterance(text);
        options.lang && (utterance.lang = options.lang);
        options.voice && (utterance.voice = options.voice);
        utterance.rate = options.rate || 1;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;
        utterance.onstart = handlePlay;
        utterance.onpause = handlePause;
        utterance.onresume = handlePlay;
        utterance.onend = handleEnd;
        window.speechSynthesis.speak(utterance);
        return function () {
            mounted.current = false;
        };
    }, []);
    return state;
};
useSpeech$1.default = useSpeech;

var useStartTyping$1 = {};

Object.defineProperty(useStartTyping$1, "__esModule", { value: true });
var tslib_1$e = require$$0$1;
var useIsomorphicLayoutEffect_1$2 = tslib_1$e.__importDefault(useIsomorphicLayoutEffect$1);
var util_1$5 = util;
var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    useIsomorphicLayoutEffect_1$2.default(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        util_1$5.on(document, 'keydown', keydown);
        return function () {
            util_1$5.off(document, 'keydown', keydown);
        };
    }, []);
};
useStartTyping$1.default = useStartTyping;

var useStateWithHistory$1 = {};

Object.defineProperty(useStateWithHistory$1, "__esModule", { value: true });
useStateWithHistory$1.useStateWithHistory = void 0;
var react_1$g = require$$1$7;
var useFirstMountState_1 = useFirstMountState$1;
var hookState_1$1 = hookState;
function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    var _a = react_1$g.useState(initialState), state = _a[0], innerSetState = _a[1];
    var history = react_1$g.useRef((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = react_1$g.useRef(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = react_1$g.useCallback(function (newState) {
        innerSetState(function (currentState) {
            newState = hookState_1$1.resolveHookState(newState, currentState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = react_1$g.useMemo(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}
useStateWithHistory$1.useStateWithHistory = useStateWithHistory;

var useStateList$1 = {};

Object.defineProperty(useStateList$1, "__esModule", { value: true });
var tslib_1$d = require$$0$1;
var react_1$f = require$$1$7;
var useMountedState_1 = tslib_1$d.__importDefault(useMountedState$1);
var useUpdate_1$1 = tslib_1$d.__importDefault(useUpdate$1);
var useUpdateEffect_1 = tslib_1$d.__importDefault(useUpdateEffect$1);
function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = useMountedState_1.default();
    var update = useUpdate_1$1.default();
    var index = react_1$f.useRef(0);
    // If new state list is shorter that before - switch to the last element
    useUpdateEffect_1.default(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = react_1$f.useMemo(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current =
                newIndex >= 0
                    ? newIndex % stateSet.length
                    : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return tslib_1$d.__assign({ state: stateSet[index.current], currentIndex: index.current, isFirst: index.current === 0, isLast: index.current === stateSet.length - 1 }, actions);
}
useStateList$1.default = useStateList;

var useThrottle$1 = {};

Object.defineProperty(useThrottle$1, "__esModule", { value: true });
var tslib_1$c = require$$0$1;
var react_1$e = require$$1$7;
var useUnmount_1$1 = tslib_1$c.__importDefault(useUnmount$1);
var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1$e.useState(value), state = _a[0], setState = _a[1];
    var timeout = react_1$e.useRef();
    var nextValue = react_1$e.useRef(null);
    var hasNextValue = react_1$e.useRef(0);
    react_1$e.useEffect(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    useUnmount_1$1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
useThrottle$1.default = useThrottle;

var useThrottleFn$1 = {};

Object.defineProperty(useThrottleFn$1, "__esModule", { value: true });
var tslib_1$b = require$$0$1;
var react_1$d = require$$1$7;
var useUnmount_1 = tslib_1$b.__importDefault(useUnmount$1);
var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1$d.useState(null), state = _a[0], setState = _a[1];
    var timeout = react_1$d.useRef();
    var nextArgs = react_1$d.useRef();
    react_1$d.useEffect(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
useThrottleFn$1.default = useThrottleFn;

var useTimeout$1 = {};

Object.defineProperty(useTimeout$1, "__esModule", { value: true });
var tslib_1$a = require$$0$1;
var useTimeoutFn_1 = tslib_1$a.__importDefault(useTimeoutFn$1);
var useUpdate_1 = tslib_1$a.__importDefault(useUpdate$1);
function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = useUpdate_1.default();
    return useTimeoutFn_1.default(update, ms);
}
useTimeout$1.default = useTimeout;

var useTitle$1 = {};

Object.defineProperty(useTitle$1, "__esModule", { value: true });
var react_1$c = require$$1$7;
var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = react_1$c.useRef(document.title);
    if (document.title !== title)
        document.title = title;
    react_1$c.useEffect(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
useTitle$1.default = typeof document !== 'undefined' ? useTitle : function (_title) { };

var useTween$1 = {};

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(tsEasing);

Object.defineProperty(useTween$1, "__esModule", { value: true });
var tslib_1$9 = require$$0$1;
var ts_easing_1 = require$$1;
var useRaf_1 = tslib_1$9.__importDefault(useRaf$1);
var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing_1.easing[easingName];
    var t = useRaf_1.default(ms, delay);
    return fn(t);
};
useTween$1.default = useTween;

var useUnmountPromise$1 = {};

Object.defineProperty(useUnmountPromise$1, "__esModule", { value: true });
var tslib_1$8 = require$$0$1;
var react_1$b = require$$1$7;
var useEffectOnce_1$1 = tslib_1$8.__importDefault(useEffectOnce$1);
var useUnmountPromise = function () {
    var refUnmounted = react_1$b.useRef(false);
    useEffectOnce_1$1.default(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = react_1$b.useMemo(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
useUnmountPromise$1.default = useUnmountPromise;

var useUpsert$1 = {};

Object.defineProperty(useUpsert$1, "__esModule", { value: true });
var tslib_1$7 = require$$0$1;
var useList_1 = tslib_1$7.__importDefault(useList$1);
/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = useList_1.default(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        tslib_1$7.__assign(tslib_1$7.__assign({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}
useUpsert$1.default = useUpsert;

var useVibrate$1 = {};

Object.defineProperty(useVibrate$1, "__esModule", { value: true });
var react_1$a = require$$1$7;
var util_1$4 = util;
var isVibrationApiSupported = util_1$4.isNavigator && 'vibrate' in navigator;
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    react_1$a.useEffect(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
useVibrate$1.default = isVibrationApiSupported ? useVibrate : util_1$4.noop;

var useVideo$1 = {};

Object.defineProperty(useVideo$1, "__esModule", { value: true });
var tslib_1$6 = require$$0$1;
var createHTMLMediaHook_1 = tslib_1$6.__importDefault(/*@__PURE__*/ requireCreateHTMLMediaHook());
var useVideo = createHTMLMediaHook_1.default('video');
useVideo$1.default = useVideo;

var useStateValidator$1 = {};

Object.defineProperty(useStateValidator$1, "__esModule", { value: true });
var react_1$9 = require$$1$7;
function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = react_1$9.useRef(validator);
    var stateInner = react_1$9.useRef(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = react_1$9.useState(initialState), validity = _a[0], setValidity = _a[1];
    var validate = react_1$9.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    react_1$9.useEffect(function () {
        validate();
    }, [state]);
    return [validity, validate];
}
useStateValidator$1.default = useStateValidator;

var useScrollbarWidth$1 = {};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(scrollbarWidth);

Object.defineProperty(useScrollbarWidth$1, "__esModule", { value: true });
useScrollbarWidth$1.useScrollbarWidth = void 0;
var scrollbar_width_1 = require$$0;
var react_1$8 = require$$1$7;
function useScrollbarWidth() {
    var _a = react_1$8.useState(scrollbar_width_1.scrollbarWidth()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    react_1$8.useEffect(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(scrollbar_width_1.scrollbarWidth());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}
useScrollbarWidth$1.useScrollbarWidth = useScrollbarWidth;

var useMultiStateValidator$1 = {};

Object.defineProperty(useMultiStateValidator$1, "__esModule", { value: true });
useMultiStateValidator$1.useMultiStateValidator = void 0;
var react_1$7 = require$$1$7;
function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = react_1$7.useRef(validator);
    var statesInner = react_1$7.useRef(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = react_1$7.useState(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = react_1$7.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    react_1$7.useEffect(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}
useMultiStateValidator$1.useMultiStateValidator = useMultiStateValidator;

var useWindowScroll$1 = {};

Object.defineProperty(useWindowScroll$1, "__esModule", { value: true });
var tslib_1$5 = require$$0$1;
var react_1$6 = require$$1$7;
var util_1$3 = util;
var useRafState_1$1 = tslib_1$5.__importDefault(useRafState$1);
var useWindowScroll = function () {
    var _a = useRafState_1$1.default(function () { return ({
        x: util_1$3.isBrowser ? window.pageXOffset : 0,
        y: util_1$3.isBrowser ? window.pageYOffset : 0,
    }); }), state = _a[0], setState = _a[1];
    react_1$6.useEffect(function () {
        var handler = function () {
            setState(function (state) {
                var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
                //Check state for change, return same state if no change happened to prevent rerender
                //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
                return state.x !== pageXOffset || state.y !== pageYOffset
                    ? {
                        x: pageXOffset,
                        y: pageYOffset,
                    }
                    : state;
            });
        };
        //We have to update window scroll at mount, before subscription.
        //Window scroll may be changed between render and effect handler.
        handler();
        util_1$3.on(window, 'scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            util_1$3.off(window, 'scroll', handler);
        };
    }, []);
    return state;
};
useWindowScroll$1.default = useWindowScroll;

var useWindowSize$1 = {};

Object.defineProperty(useWindowSize$1, "__esModule", { value: true });
var tslib_1$4 = require$$0$1;
var react_1$5 = require$$1$7;
var useRafState_1 = tslib_1$4.__importDefault(useRafState$1);
var util_1$2 = util;
var useWindowSize = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.initialWidth, initialWidth = _c === void 0 ? Infinity : _c, _d = _b.initialHeight, initialHeight = _d === void 0 ? Infinity : _d, onChange = _b.onChange;
    // Use the useRafState hook to maintain the current window size (width and height)
    var _e = useRafState_1.default({
        width: util_1$2.isBrowser ? window.innerWidth : initialWidth,
        height: util_1$2.isBrowser ? window.innerHeight : initialHeight,
    }), state = _e[0], setState = _e[1];
    react_1$5.useEffect(function () {
        // Only run the effect on the browser (to avoid issues with SSR)
        if (util_1$2.isBrowser) {
            var handler_1 = function () {
                var width = window.innerWidth;
                var height = window.innerHeight;
                // Update the state with the new window size
                setState({
                    width: width,
                    height: height,
                });
                // If an onChange callback is provided, call it with the new dimensions
                if (onChange)
                    onChange(width, height);
            };
            // Add event listener for the resize event
            util_1$2.on(window, 'resize', handler_1);
            // Cleanup function to remove the event listener when the component is unmounted (it's for performance optimization)
            return function () {
                util_1$2.off(window, 'resize', handler_1);
            };
        }
    }, []);
    // Return the current window size (width and height)
    return state;
};
useWindowSize$1.default = useWindowSize;

var useMeasure$1 = {};

Object.defineProperty(useMeasure$1, "__esModule", { value: true });
var tslib_1$3 = require$$0$1;
var react_1$4 = require$$1$7;
var useIsomorphicLayoutEffect_1$1 = tslib_1$3.__importDefault(useIsomorphicLayoutEffect$1);
var util_1$1 = util;
var defaultState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};
function useMeasure() {
    var _a = react_1$4.useState(null), element = _a[0], ref = _a[1];
    var _b = react_1$4.useState(defaultState), rect = _b[0], setRect = _b[1];
    var observer = react_1$4.useMemo(function () {
        return new window.ResizeObserver(function (entries) {
            if (entries[0]) {
                var _a = entries[0].contentRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height, top_1 = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
                setRect({ x: x, y: y, width: width, height: height, top: top_1, left: left, bottom: bottom, right: right });
            }
        });
    }, []);
    useIsomorphicLayoutEffect_1$1.default(function () {
        if (!element)
            return;
        observer.observe(element);
        return function () {
            observer.disconnect();
        };
    }, [element]);
    return [ref, rect];
}
useMeasure$1.default = util_1$1.isBrowser && typeof window.ResizeObserver !== 'undefined'
    ? useMeasure
    : (function () { return [util_1$1.noop, defaultState]; });

var usePinchZoom = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ZoomState = void 0;
	var react_1 = require$$1$7;
	var ZoomState;
	(function (ZoomState) {
	    ZoomState["ZOOMING_IN"] = "ZOOMING_IN";
	    ZoomState["ZOOMING_OUT"] = "ZOOMING_OUT";
	})(ZoomState = exports.ZoomState || (exports.ZoomState = {}));
	var usePinchZoom = function (ref) {
	    var cacheRef = react_1.useMemo(function () { return ({
	        evCache: [],
	        prevDiff: -1,
	    }); }, [ref.current]);
	    var _a = react_1.useState(), zoomingState = _a[0], setZoomingState = _a[1];
	    var pointermove_handler = function (ev) {
	        // This function implements a 2-pointer horizontal pinch/zoom gesture.
	        //
	        // If the distance between the two pointers has increased (zoom in),
	        // the target element's background is changed to 'pink' and if the
	        // distance is decreasing (zoom out), the color is changed to 'lightblue'.
	        //
	        // This function sets the target element's border to 'dashed' to visually
	        // indicate the pointer's target received a move event.
	        // Find this event in the cache and update its record with this event
	        for (var i = 0; i < cacheRef.evCache.length; i++) {
	            if (ev.pointerId == cacheRef.evCache[i].pointerId) {
	                cacheRef.evCache[i] = ev;
	                break;
	            }
	        }
	        // If two pointers are down, check for pinch gestures
	        if (cacheRef.evCache.length == 2) {
	            // console.log(prevDiff)
	            // Calculate the distance between the two pointers
	            var curDiff = Math.abs(cacheRef.evCache[0].clientX - cacheRef.evCache[1].clientX);
	            if (cacheRef.prevDiff > 0) {
	                if (curDiff > cacheRef.prevDiff) {
	                    // The distance between the two pointers has increased
	                    setZoomingState([ZoomState.ZOOMING_IN, curDiff]);
	                }
	                if (curDiff < cacheRef.prevDiff) {
	                    // The distance between the two pointers has decreased
	                    setZoomingState([ZoomState.ZOOMING_OUT, curDiff]);
	                }
	            }
	            // Cache the distance for the next move event
	            cacheRef.prevDiff = curDiff;
	        }
	    };
	    var pointerdown_handler = function (ev) {
	        // The pointerdown event signals the start of a touch interaction.
	        // This event is cached to support 2-finger gestures
	        cacheRef.evCache.push(ev);
	        // console.log('pointerDown', ev);
	    };
	    var pointerup_handler = function (ev) {
	        // Remove this pointer from the cache and reset the target's
	        // background and border
	        remove_event(ev);
	        // If the number of pointers down is less than two then reset diff tracker
	        if (cacheRef.evCache.length < 2) {
	            cacheRef.prevDiff = -1;
	        }
	    };
	    var remove_event = function (ev) {
	        // Remove this event from the target's cache
	        for (var i = 0; i < cacheRef.evCache.length; i++) {
	            if (cacheRef.evCache[i].pointerId == ev.pointerId) {
	                cacheRef.evCache.splice(i, 1);
	                break;
	            }
	        }
	    };
	    react_1.useEffect(function () {
	        if (ref === null || ref === void 0 ? void 0 : ref.current) {
	            ref.current.onpointerdown = pointerdown_handler;
	            ref.current.onpointermove = pointermove_handler;
	            ref.current.onpointerup = pointerup_handler;
	            ref.current.onpointercancel = pointerup_handler;
	            ref.current.onpointerout = pointerup_handler;
	            ref.current.onpointerleave = pointerup_handler;
	        }
	    }, [ref === null || ref === void 0 ? void 0 : ref.current]);
	    return zoomingState
	        ? { zoomingState: zoomingState[0], pinchState: zoomingState[1] }
	        : { zoomingState: null, pinchState: 0 };
	};
	exports.default = usePinchZoom; 
} (usePinchZoom));

var useRendersCount$1 = {};

Object.defineProperty(useRendersCount$1, "__esModule", { value: true });
useRendersCount$1.useRendersCount = void 0;
var react_1$3 = require$$1$7;
function useRendersCount() {
    return ++react_1$3.useRef(0).current;
}
useRendersCount$1.useRendersCount = useRendersCount;

var useSet$1 = {};

Object.defineProperty(useSet$1, "__esModule", { value: true });
var tslib_1$2 = require$$0$1;
var react_1$2 = require$$1$7;
var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = react_1$2.useState(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = react_1$2.useMemo(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(tslib_1$2.__spreadArrays(Array.from(prevSet), [item])); }); };
        var remove = function (item) {
            return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); });
        };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(tslib_1$2.__spreadArrays(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); }, clear: function () { return setSet(new Set()); } };
    }, [setSet]);
    var utils = tslib_1$2.__assign({ has: react_1$2.useCallback(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
useSet$1.default = useSet;

var createGlobalState$1 = {};

Object.defineProperty(createGlobalState$1, "__esModule", { value: true });
createGlobalState$1.createGlobalState = void 0;
var tslib_1$1 = require$$0$1;
var react_1$1 = require$$1$7;
var hookState_1 = hookState;
var useEffectOnce_1 = tslib_1$1.__importDefault(useEffectOnce$1);
var useIsomorphicLayoutEffect_1 = tslib_1$1.__importDefault(useIsomorphicLayoutEffect$1);
function createGlobalState(initialState) {
    var store = {
        state: initialState instanceof Function ? initialState() : initialState,
        setState: function (nextState) {
            store.state = hookState_1.resolveHookState(nextState, store.state);
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = react_1$1.useState(store.state), globalState = _a[0], stateSetter = _a[1];
        useEffectOnce_1.default(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        useIsomorphicLayoutEffect_1.default(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
createGlobalState$1.createGlobalState = createGlobalState;
createGlobalState$1.default = createGlobalState;

var useHash$1 = {};

Object.defineProperty(useHash$1, "__esModule", { value: true });
useHash$1.useHash = void 0;
var tslib_1 = require$$0$1;
var react_1 = require$$1$7;
var useLifecycles_1 = tslib_1.__importDefault(useLifecycles$1);
var util_1 = util;
/**
 * read and write url hash, response to url hash change
 */
var useHash = function () {
    var _a = react_1.useState(function () { return window.location.hash; }), hash = _a[0], setHash = _a[1];
    var onHashChange = react_1.useCallback(function () {
        setHash(window.location.hash);
    }, []);
    useLifecycles_1.default(function () {
        util_1.on(window, 'hashchange', onHashChange);
    }, function () {
        util_1.off(window, 'hashchange', onHashChange);
    });
    var _setHash = react_1.useCallback(function (newHash) {
        if (newHash !== hash) {
            window.location.hash = newHash;
        }
    }, [hash]);
    return [hash, _setHash];
};
useHash$1.useHash = useHash;

(function (exports) {
	var __importDefault = (lib && lib.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.useLogger = exports.useLockBodyScroll = exports.useLocation = exports.useLocalStorage = exports.useList = exports.useLifecycles = exports.useLatest = exports.useKeyPressEvent = exports.useKeyPress = exports.createBreakpoint = exports.useKey = exports.useIsomorphicLayoutEffect = exports.useInterval = exports.useIntersection = exports.useIdle = exports.useHoverDirty = exports.useHover = exports.useHarmonicIntervalFn = exports.useGetSetState = exports.useGetSet = exports.useGeolocation = exports.useFullscreen = exports.useFavicon = exports.useError = exports.useEvent = exports.ensuredForwardRef = exports.useEnsuredForwardedRef = exports.useEffectOnce = exports.useDropArea = exports.useDrop = exports.useDefault = exports.useDeepCompareEffect = exports.useDebounce = exports.useCustomCompareEffect = exports.useCss = exports.useCounter = exports.useCopyToClipboard = exports.useCookie = exports.useClickAway = exports.useBoolean = exports.useBeforeUnload = exports.useBattery = exports.useAudio = exports.useAsyncRetry = exports.useAsyncFn = exports.useAsync = exports.createStateContext = exports.createReducer = exports.createReducerContext = exports.createMemo = void 0;
	exports.useUpsert = exports.useUpdateEffect = exports.useUpdate = exports.useUnmountPromise = exports.useUnmount = exports.useTween = exports.useToggle = exports.useTitle = exports.useTimeoutFn = exports.useTimeout = exports.useThrottleFn = exports.useThrottle = exports.useStateList = exports.useStateWithHistory = exports.useStartTyping = exports.useSpeech = exports.useSlider = exports.useSize = exports.useShallowCompareEffect = exports.useSetState = exports.useSessionStorage = exports.useScrolling = exports.useScroll = exports.useScratch = exports.useSearchParam = exports.useRafState = exports.useRafLoop = exports.useRaf = exports.useQueue = exports.usePromise = exports.usePreviousDistinct = exports.usePrevious = exports.usePermission = exports.usePageLeave = exports.useOrientation = exports.useObservable = exports.useNumber = exports.useNetworkState = exports.useMouseWheel = exports.useMouseHovered = exports.useMouse = exports.useMountedState = exports.useMount = exports.useMotion = exports.useMethods = exports.useMediatedState = exports.useMediaDevices = exports.useMedia = exports.useMap = exports.useLongPress = void 0;
	exports.useHash = exports.createGlobalState = exports.useSet = exports.useFirstMountState = exports.useRendersCount = exports.usePinchZoom = exports.useMeasure = exports.useWindowSize = exports.useWindowScroll = exports.useMultiStateValidator = exports.useScrollbarWidth = exports.useStateValidator = exports.useVideo = exports.useVibrate = void 0;
	var createMemo_1 = createMemo$1;
	Object.defineProperty(exports, "createMemo", { enumerable: true, get: function () { return __importDefault(createMemo_1).default; } });
	var createReducerContext_1 = createReducerContext$1;
	Object.defineProperty(exports, "createReducerContext", { enumerable: true, get: function () { return __importDefault(createReducerContext_1).default; } });
	var createReducer_1 = createReducer$1;
	Object.defineProperty(exports, "createReducer", { enumerable: true, get: function () { return __importDefault(createReducer_1).default; } });
	var createStateContext_1 = createStateContext$1;
	Object.defineProperty(exports, "createStateContext", { enumerable: true, get: function () { return __importDefault(createStateContext_1).default; } });
	var useAsync_1 = useAsync$1;
	Object.defineProperty(exports, "useAsync", { enumerable: true, get: function () { return __importDefault(useAsync_1).default; } });
	var useAsyncFn_1 = useAsyncFn$1;
	Object.defineProperty(exports, "useAsyncFn", { enumerable: true, get: function () { return __importDefault(useAsyncFn_1).default; } });
	var useAsyncRetry_1 = useAsyncRetry$1;
	Object.defineProperty(exports, "useAsyncRetry", { enumerable: true, get: function () { return __importDefault(useAsyncRetry_1).default; } });
	var useAudio_1 = useAudio$1;
	Object.defineProperty(exports, "useAudio", { enumerable: true, get: function () { return __importDefault(useAudio_1).default; } });
	var useBattery_1 = useBattery$1;
	Object.defineProperty(exports, "useBattery", { enumerable: true, get: function () { return __importDefault(useBattery_1).default; } });
	var useBeforeUnload_1 = useBeforeUnload$1;
	Object.defineProperty(exports, "useBeforeUnload", { enumerable: true, get: function () { return __importDefault(useBeforeUnload_1).default; } });
	var useBoolean_1 = useBoolean;
	Object.defineProperty(exports, "useBoolean", { enumerable: true, get: function () { return __importDefault(useBoolean_1).default; } });
	var useClickAway_1 = useClickAway$1;
	Object.defineProperty(exports, "useClickAway", { enumerable: true, get: function () { return __importDefault(useClickAway_1).default; } });
	var useCookie_1 = useCookie$1;
	Object.defineProperty(exports, "useCookie", { enumerable: true, get: function () { return __importDefault(useCookie_1).default; } });
	var useCopyToClipboard_1 = useCopyToClipboard$1;
	Object.defineProperty(exports, "useCopyToClipboard", { enumerable: true, get: function () { return __importDefault(useCopyToClipboard_1).default; } });
	var useCounter_1 = useCounter$1;
	Object.defineProperty(exports, "useCounter", { enumerable: true, get: function () { return __importDefault(useCounter_1).default; } });
	var useCss_1 = useCss$1;
	Object.defineProperty(exports, "useCss", { enumerable: true, get: function () { return __importDefault(useCss_1).default; } });
	var useCustomCompareEffect_1 = useCustomCompareEffect$1;
	Object.defineProperty(exports, "useCustomCompareEffect", { enumerable: true, get: function () { return __importDefault(useCustomCompareEffect_1).default; } });
	var useDebounce_1 = useDebounce$1;
	Object.defineProperty(exports, "useDebounce", { enumerable: true, get: function () { return __importDefault(useDebounce_1).default; } });
	var useDeepCompareEffect_1 = useDeepCompareEffect$1;
	Object.defineProperty(exports, "useDeepCompareEffect", { enumerable: true, get: function () { return __importDefault(useDeepCompareEffect_1).default; } });
	var useDefault_1 = useDefault$1;
	Object.defineProperty(exports, "useDefault", { enumerable: true, get: function () { return __importDefault(useDefault_1).default; } });
	var useDrop_1 = useDrop$1;
	Object.defineProperty(exports, "useDrop", { enumerable: true, get: function () { return __importDefault(useDrop_1).default; } });
	var useDropArea_1 = useDropArea$1;
	Object.defineProperty(exports, "useDropArea", { enumerable: true, get: function () { return __importDefault(useDropArea_1).default; } });
	var useEffectOnce_1 = useEffectOnce$1;
	Object.defineProperty(exports, "useEffectOnce", { enumerable: true, get: function () { return __importDefault(useEffectOnce_1).default; } });
	var useEnsuredForwardedRef_1 = useEnsuredForwardedRef$1;
	Object.defineProperty(exports, "useEnsuredForwardedRef", { enumerable: true, get: function () { return __importDefault(useEnsuredForwardedRef_1).default; } });
	Object.defineProperty(exports, "ensuredForwardRef", { enumerable: true, get: function () { return useEnsuredForwardedRef_1.ensuredForwardRef; } });
	var useEvent_1 = useEvent$1;
	Object.defineProperty(exports, "useEvent", { enumerable: true, get: function () { return __importDefault(useEvent_1).default; } });
	var useError_1 = useError$1;
	Object.defineProperty(exports, "useError", { enumerable: true, get: function () { return __importDefault(useError_1).default; } });
	var useFavicon_1 = useFavicon$1;
	Object.defineProperty(exports, "useFavicon", { enumerable: true, get: function () { return __importDefault(useFavicon_1).default; } });
	var useFullscreen_1 = useFullscreen$1;
	Object.defineProperty(exports, "useFullscreen", { enumerable: true, get: function () { return __importDefault(useFullscreen_1).default; } });
	var useGeolocation_1 = useGeolocation$1;
	Object.defineProperty(exports, "useGeolocation", { enumerable: true, get: function () { return __importDefault(useGeolocation_1).default; } });
	var useGetSet_1 = useGetSet$1;
	Object.defineProperty(exports, "useGetSet", { enumerable: true, get: function () { return __importDefault(useGetSet_1).default; } });
	var useGetSetState_1 = useGetSetState$1;
	Object.defineProperty(exports, "useGetSetState", { enumerable: true, get: function () { return __importDefault(useGetSetState_1).default; } });
	var useHarmonicIntervalFn_1 = useHarmonicIntervalFn$1;
	Object.defineProperty(exports, "useHarmonicIntervalFn", { enumerable: true, get: function () { return __importDefault(useHarmonicIntervalFn_1).default; } });
	var useHover_1 = useHover$1;
	Object.defineProperty(exports, "useHover", { enumerable: true, get: function () { return __importDefault(useHover_1).default; } });
	var useHoverDirty_1 = useHoverDirty$1;
	Object.defineProperty(exports, "useHoverDirty", { enumerable: true, get: function () { return __importDefault(useHoverDirty_1).default; } });
	var useIdle_1 = useIdle$1;
	Object.defineProperty(exports, "useIdle", { enumerable: true, get: function () { return __importDefault(useIdle_1).default; } });
	var useIntersection_1 = useIntersection$1;
	Object.defineProperty(exports, "useIntersection", { enumerable: true, get: function () { return __importDefault(useIntersection_1).default; } });
	var useInterval_1 = useInterval$1;
	Object.defineProperty(exports, "useInterval", { enumerable: true, get: function () { return __importDefault(useInterval_1).default; } });
	var useIsomorphicLayoutEffect_1 = useIsomorphicLayoutEffect$1;
	Object.defineProperty(exports, "useIsomorphicLayoutEffect", { enumerable: true, get: function () { return __importDefault(useIsomorphicLayoutEffect_1).default; } });
	var useKey_1 = useKey$1;
	Object.defineProperty(exports, "useKey", { enumerable: true, get: function () { return __importDefault(useKey_1).default; } });
	var createBreakpoint_1 = createBreakpoint$1;
	Object.defineProperty(exports, "createBreakpoint", { enumerable: true, get: function () { return __importDefault(createBreakpoint_1).default; } });
	// not exported because of peer dependency
	// export { default as useKeyboardJs } from './useKeyboardJs';
	var useKeyPress_1 = useKeyPress$1;
	Object.defineProperty(exports, "useKeyPress", { enumerable: true, get: function () { return __importDefault(useKeyPress_1).default; } });
	var useKeyPressEvent_1 = useKeyPressEvent$1;
	Object.defineProperty(exports, "useKeyPressEvent", { enumerable: true, get: function () { return __importDefault(useKeyPressEvent_1).default; } });
	var useLatest_1 = useLatest$1;
	Object.defineProperty(exports, "useLatest", { enumerable: true, get: function () { return __importDefault(useLatest_1).default; } });
	var useLifecycles_1 = useLifecycles$1;
	Object.defineProperty(exports, "useLifecycles", { enumerable: true, get: function () { return __importDefault(useLifecycles_1).default; } });
	var useList_1 = useList$1;
	Object.defineProperty(exports, "useList", { enumerable: true, get: function () { return __importDefault(useList_1).default; } });
	var useLocalStorage_1 = useLocalStorage$1;
	Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function () { return __importDefault(useLocalStorage_1).default; } });
	var useLocation_1 = useLocation;
	Object.defineProperty(exports, "useLocation", { enumerable: true, get: function () { return __importDefault(useLocation_1).default; } });
	var useLockBodyScroll_1 = useLockBodyScroll;
	Object.defineProperty(exports, "useLockBodyScroll", { enumerable: true, get: function () { return __importDefault(useLockBodyScroll_1).default; } });
	var useLogger_1 = useLogger$1;
	Object.defineProperty(exports, "useLogger", { enumerable: true, get: function () { return __importDefault(useLogger_1).default; } });
	var useLongPress_1 = useLongPress$1;
	Object.defineProperty(exports, "useLongPress", { enumerable: true, get: function () { return __importDefault(useLongPress_1).default; } });
	var useMap_1 = useMap$1;
	Object.defineProperty(exports, "useMap", { enumerable: true, get: function () { return __importDefault(useMap_1).default; } });
	var useMedia_1 = useMedia$1;
	Object.defineProperty(exports, "useMedia", { enumerable: true, get: function () { return __importDefault(useMedia_1).default; } });
	var useMediaDevices_1 = useMediaDevices$1;
	Object.defineProperty(exports, "useMediaDevices", { enumerable: true, get: function () { return __importDefault(useMediaDevices_1).default; } });
	var useMediatedState_1 = useMediatedState$1;
	Object.defineProperty(exports, "useMediatedState", { enumerable: true, get: function () { return useMediatedState_1.useMediatedState; } });
	var useMethods_1 = useMethods$1;
	Object.defineProperty(exports, "useMethods", { enumerable: true, get: function () { return __importDefault(useMethods_1).default; } });
	var useMotion_1 = useMotion$1;
	Object.defineProperty(exports, "useMotion", { enumerable: true, get: function () { return __importDefault(useMotion_1).default; } });
	var useMount_1 = useMount$1;
	Object.defineProperty(exports, "useMount", { enumerable: true, get: function () { return __importDefault(useMount_1).default; } });
	var useMountedState_1 = useMountedState$1;
	Object.defineProperty(exports, "useMountedState", { enumerable: true, get: function () { return __importDefault(useMountedState_1).default; } });
	var useMouse_1 = useMouse$1;
	Object.defineProperty(exports, "useMouse", { enumerable: true, get: function () { return __importDefault(useMouse_1).default; } });
	var useMouseHovered_1 = useMouseHovered$1;
	Object.defineProperty(exports, "useMouseHovered", { enumerable: true, get: function () { return __importDefault(useMouseHovered_1).default; } });
	var useMouseWheel_1 = useMouseWheel;
	Object.defineProperty(exports, "useMouseWheel", { enumerable: true, get: function () { return __importDefault(useMouseWheel_1).default; } });
	var useNetworkState_1 = useNetworkState$1;
	Object.defineProperty(exports, "useNetworkState", { enumerable: true, get: function () { return __importDefault(useNetworkState_1).default; } });
	var useNumber_1 = useNumber;
	Object.defineProperty(exports, "useNumber", { enumerable: true, get: function () { return __importDefault(useNumber_1).default; } });
	var useObservable_1 = useObservable$1;
	Object.defineProperty(exports, "useObservable", { enumerable: true, get: function () { return __importDefault(useObservable_1).default; } });
	var useOrientation_1 = useOrientation$1;
	Object.defineProperty(exports, "useOrientation", { enumerable: true, get: function () { return __importDefault(useOrientation_1).default; } });
	var usePageLeave_1 = usePageLeave$1;
	Object.defineProperty(exports, "usePageLeave", { enumerable: true, get: function () { return __importDefault(usePageLeave_1).default; } });
	var usePermission_1 = usePermission$1;
	Object.defineProperty(exports, "usePermission", { enumerable: true, get: function () { return __importDefault(usePermission_1).default; } });
	var usePrevious_1 = usePrevious$1;
	Object.defineProperty(exports, "usePrevious", { enumerable: true, get: function () { return __importDefault(usePrevious_1).default; } });
	var usePreviousDistinct_1 = usePreviousDistinct$1;
	Object.defineProperty(exports, "usePreviousDistinct", { enumerable: true, get: function () { return __importDefault(usePreviousDistinct_1).default; } });
	var usePromise_1 = usePromise$1;
	Object.defineProperty(exports, "usePromise", { enumerable: true, get: function () { return __importDefault(usePromise_1).default; } });
	var useQueue_1 = useQueue$1;
	Object.defineProperty(exports, "useQueue", { enumerable: true, get: function () { return __importDefault(useQueue_1).default; } });
	var useRaf_1 = useRaf$1;
	Object.defineProperty(exports, "useRaf", { enumerable: true, get: function () { return __importDefault(useRaf_1).default; } });
	var useRafLoop_1 = useRafLoop$1;
	Object.defineProperty(exports, "useRafLoop", { enumerable: true, get: function () { return __importDefault(useRafLoop_1).default; } });
	var useRafState_1 = useRafState$1;
	Object.defineProperty(exports, "useRafState", { enumerable: true, get: function () { return __importDefault(useRafState_1).default; } });
	var useSearchParam_1 = useSearchParam$1;
	Object.defineProperty(exports, "useSearchParam", { enumerable: true, get: function () { return __importDefault(useSearchParam_1).default; } });
	var useScratch_1 = useScratch$1;
	Object.defineProperty(exports, "useScratch", { enumerable: true, get: function () { return __importDefault(useScratch_1).default; } });
	var useScroll_1 = useScroll$1;
	Object.defineProperty(exports, "useScroll", { enumerable: true, get: function () { return __importDefault(useScroll_1).default; } });
	var useScrolling_1 = useScrolling$1;
	Object.defineProperty(exports, "useScrolling", { enumerable: true, get: function () { return __importDefault(useScrolling_1).default; } });
	var useSessionStorage_1 = useSessionStorage$1;
	Object.defineProperty(exports, "useSessionStorage", { enumerable: true, get: function () { return __importDefault(useSessionStorage_1).default; } });
	var useSetState_1 = useSetState$1;
	Object.defineProperty(exports, "useSetState", { enumerable: true, get: function () { return __importDefault(useSetState_1).default; } });
	var useShallowCompareEffect_1 = useShallowCompareEffect$1;
	Object.defineProperty(exports, "useShallowCompareEffect", { enumerable: true, get: function () { return __importDefault(useShallowCompareEffect_1).default; } });
	var useSize_1 = useSize$1;
	Object.defineProperty(exports, "useSize", { enumerable: true, get: function () { return __importDefault(useSize_1).default; } });
	var useSlider_1 = useSlider$1;
	Object.defineProperty(exports, "useSlider", { enumerable: true, get: function () { return __importDefault(useSlider_1).default; } });
	var useSpeech_1 = useSpeech$1;
	Object.defineProperty(exports, "useSpeech", { enumerable: true, get: function () { return __importDefault(useSpeech_1).default; } });
	// not exported because of peer dependency
	// export { default as useSpring } from './useSpring';
	var useStartTyping_1 = useStartTyping$1;
	Object.defineProperty(exports, "useStartTyping", { enumerable: true, get: function () { return __importDefault(useStartTyping_1).default; } });
	var useStateWithHistory_1 = useStateWithHistory$1;
	Object.defineProperty(exports, "useStateWithHistory", { enumerable: true, get: function () { return useStateWithHistory_1.useStateWithHistory; } });
	var useStateList_1 = useStateList$1;
	Object.defineProperty(exports, "useStateList", { enumerable: true, get: function () { return __importDefault(useStateList_1).default; } });
	var useThrottle_1 = useThrottle$1;
	Object.defineProperty(exports, "useThrottle", { enumerable: true, get: function () { return __importDefault(useThrottle_1).default; } });
	var useThrottleFn_1 = useThrottleFn$1;
	Object.defineProperty(exports, "useThrottleFn", { enumerable: true, get: function () { return __importDefault(useThrottleFn_1).default; } });
	var useTimeout_1 = useTimeout$1;
	Object.defineProperty(exports, "useTimeout", { enumerable: true, get: function () { return __importDefault(useTimeout_1).default; } });
	var useTimeoutFn_1 = useTimeoutFn$1;
	Object.defineProperty(exports, "useTimeoutFn", { enumerable: true, get: function () { return __importDefault(useTimeoutFn_1).default; } });
	var useTitle_1 = useTitle$1;
	Object.defineProperty(exports, "useTitle", { enumerable: true, get: function () { return __importDefault(useTitle_1).default; } });
	var useToggle_1 = useToggle$1;
	Object.defineProperty(exports, "useToggle", { enumerable: true, get: function () { return __importDefault(useToggle_1).default; } });
	var useTween_1 = useTween$1;
	Object.defineProperty(exports, "useTween", { enumerable: true, get: function () { return __importDefault(useTween_1).default; } });
	var useUnmount_1 = useUnmount$1;
	Object.defineProperty(exports, "useUnmount", { enumerable: true, get: function () { return __importDefault(useUnmount_1).default; } });
	var useUnmountPromise_1 = useUnmountPromise$1;
	Object.defineProperty(exports, "useUnmountPromise", { enumerable: true, get: function () { return __importDefault(useUnmountPromise_1).default; } });
	var useUpdate_1 = useUpdate$1;
	Object.defineProperty(exports, "useUpdate", { enumerable: true, get: function () { return __importDefault(useUpdate_1).default; } });
	var useUpdateEffect_1 = useUpdateEffect$1;
	Object.defineProperty(exports, "useUpdateEffect", { enumerable: true, get: function () { return __importDefault(useUpdateEffect_1).default; } });
	var useUpsert_1 = useUpsert$1;
	Object.defineProperty(exports, "useUpsert", { enumerable: true, get: function () { return __importDefault(useUpsert_1).default; } });
	var useVibrate_1 = useVibrate$1;
	Object.defineProperty(exports, "useVibrate", { enumerable: true, get: function () { return __importDefault(useVibrate_1).default; } });
	var useVideo_1 = useVideo$1;
	Object.defineProperty(exports, "useVideo", { enumerable: true, get: function () { return __importDefault(useVideo_1).default; } });
	var useStateValidator_1 = useStateValidator$1;
	Object.defineProperty(exports, "useStateValidator", { enumerable: true, get: function () { return __importDefault(useStateValidator_1).default; } });
	var useScrollbarWidth_1 = useScrollbarWidth$1;
	Object.defineProperty(exports, "useScrollbarWidth", { enumerable: true, get: function () { return useScrollbarWidth_1.useScrollbarWidth; } });
	var useMultiStateValidator_1 = useMultiStateValidator$1;
	Object.defineProperty(exports, "useMultiStateValidator", { enumerable: true, get: function () { return useMultiStateValidator_1.useMultiStateValidator; } });
	var useWindowScroll_1 = useWindowScroll$1;
	Object.defineProperty(exports, "useWindowScroll", { enumerable: true, get: function () { return __importDefault(useWindowScroll_1).default; } });
	var useWindowSize_1 = useWindowSize$1;
	Object.defineProperty(exports, "useWindowSize", { enumerable: true, get: function () { return __importDefault(useWindowSize_1).default; } });
	var useMeasure_1 = useMeasure$1;
	Object.defineProperty(exports, "useMeasure", { enumerable: true, get: function () { return __importDefault(useMeasure_1).default; } });
	var usePinchZoom_1 = usePinchZoom;
	Object.defineProperty(exports, "usePinchZoom", { enumerable: true, get: function () { return __importDefault(usePinchZoom_1).default; } });
	var useRendersCount_1 = useRendersCount$1;
	Object.defineProperty(exports, "useRendersCount", { enumerable: true, get: function () { return useRendersCount_1.useRendersCount; } });
	var useFirstMountState_1 = useFirstMountState$1;
	Object.defineProperty(exports, "useFirstMountState", { enumerable: true, get: function () { return useFirstMountState_1.useFirstMountState; } });
	var useSet_1 = useSet$1;
	Object.defineProperty(exports, "useSet", { enumerable: true, get: function () { return __importDefault(useSet_1).default; } });
	var createGlobalState_1 = createGlobalState$1;
	Object.defineProperty(exports, "createGlobalState", { enumerable: true, get: function () { return createGlobalState_1.createGlobalState; } });
	var useHash_1 = useHash$1;
	Object.defineProperty(exports, "useHash", { enumerable: true, get: function () { return useHash_1.useHash; } }); 
} (lib));

export { Header as H, lib as l, useFetch as u };
//# sourceMappingURL=index.mjs.map
