import { a as __toESM } from "../_runtime.mjs";
import { n as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useLang } from "./LangContext-DlHRSoPA.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as Terminal, o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-nJJ7xBAV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Dialog;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function Nav() {
	const { lang, setLang, t } = useLang();
	const [open, setOpen] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	const LangButton = ({ code }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setLang(code),
		className: `px-2 py-1 rounded transition-colors ${lang === code ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
		children: code
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed top-0 left-0 right-0 h-1 bg-[#4ADE80] origin-left z-[60]",
			style: { scaleX }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-[-1] bg-[radial-gradient(#4ADE80_1px,transparent_1px)] [background-size:16px_16px] opacity-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-[-1] bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4 relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 font-display text-lg font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-md bg-transparent border border-primary text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vũ xuân Tiệp" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									activeOptions: { exact: true },
									activeProps: { className: "text-foreground" },
									className: "hover:text-foreground transition-colors",
									children: lang === "DE" ? "Start" : lang === "EN" ? "Home" : "Trang chủ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#leistungen",
									className: "hover:text-foreground transition-colors",
									children: lang === "DE" ? "Leistungen" : lang === "EN" ? "Services" : "Dịch vụ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/portfolio",
									activeProps: { className: "text-foreground" },
									className: "hover:text-foreground transition-colors",
									children: lang === "DE" ? "Projekte" : lang === "EN" ? "Projects" : "Dự án"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									activeProps: { className: "text-foreground" },
									className: "hover:text-foreground transition-colors",
									children: "AI-News"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakt",
									activeProps: { className: "text-foreground" },
									className: "hover:text-foreground transition-colors",
									children: lang === "DE" ? "Kontakt" : lang === "EN" ? "Contact" : "Liên hệ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-xs font-medium bg-surface/50 rounded-md p-1 border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "DE" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "EN" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "VI" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakt",
								className: "rounded-md bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20",
								children: lang === "DE" ? "Projekt starten" : lang === "EN" ? "Start Project" : "Bắt đầu dự án"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(true),
							className: "grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground md:hidden",
							"aria-label": t("Menü öffnen", "Open menu", "Mở menu"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
				side: "right",
				className: "flex flex-col gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
						className: "flex items-center gap-2 font-display text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-md bg-transparent border border-primary text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-4 w-4" })
						}), "Vũ xuân Tiệp"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col gap-1 text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									activeOptions: { exact: true },
									activeProps: { className: "text-foreground" },
									className: "rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors",
									children: t("Start", "Home", "Trang chủ")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#leistungen",
									className: "rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors",
									children: t("Leistungen", "Services", "Dịch vụ")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/portfolio",
									activeProps: { className: "text-foreground" },
									className: "rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors",
									children: t("Projekte", "Projects", "Dự án")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									activeProps: { className: "text-foreground" },
									className: "rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors",
									children: "AI-News"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakt",
									activeProps: { className: "text-foreground" },
									className: "rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors",
									children: t("Kontakt", "Contact", "Liên hệ")
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-xs font-medium bg-surface/50 rounded-md p-1 border border-border w-fit",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "DE" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "EN" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangButton, { code: "VI" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							className: "rounded-md bg-primary/10 border border-primary/20 px-4 py-2.5 text-center text-sm font-medium text-primary transition-colors hover:bg-primary/20",
							children: t("Projekt starten", "Start Project", "Bắt đầu dự án")
						})
					})
				]
			})
		})
	] });
}
function Footer() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-foreground font-semibold",
					children: ["vuxuantiep.de — ", t("IT & KI Experte", "IT & AI Expert", "Chuyên gia IT & AI")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1",
					children: t("Cloud · KI · Web Engineering", "Cloud · AI · Web Engineering", "Đám mây · AI · Web Engineering")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/vuxuantiep",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-foreground",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://linkedin.com/in/vuxuantiep",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-foreground",
							children: "LinkedIn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:tiep@vuxuantiep.de",
							className: "hover:text-foreground",
							children: "E-Mail"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" · ",
					t("Impressum", "Imprint", "Dấu ấn"),
					" · ",
					t("Datenschutz", "Privacy", "Bảo mật")
				] })
			]
		})
	});
}
//#endregion
export { Nav as n, Footer as t };
