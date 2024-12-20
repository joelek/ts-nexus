// This file was auto-generated by @joelek/autoguard. Edit at own risk.

import * as autoguard from "@joelek/autoguard/dist/lib-shared";

export const Handler: autoguard.serialization.MessageGuard<Handler> = autoguard.guards.StringLiteral.of("git");

export type Handler = autoguard.guards.StringLiteral<"git">;

export const Domain: autoguard.serialization.MessageGuard<Domain> = autoguard.guards.Object.of({}, {
	"root": autoguard.guards.String,
	"key": autoguard.guards.String,
	"cert": autoguard.guards.String,
	"pass": autoguard.guards.String,
	"host": autoguard.guards.String,
	"handler": autoguard.guards.Reference.of(() => Handler),
	"indices": autoguard.guards.Boolean,
	"routing": autoguard.guards.Boolean
});

export type Domain = autoguard.guards.Object<{}, {
	"root": autoguard.guards.String,
	"key": autoguard.guards.String,
	"cert": autoguard.guards.String,
	"pass": autoguard.guards.String,
	"host": autoguard.guards.String,
	"handler": autoguard.guards.Reference<Handler>,
	"indices": autoguard.guards.Boolean,
	"routing": autoguard.guards.Boolean
}>;

export const Options: autoguard.serialization.MessageGuard<Options> = autoguard.guards.Object.of({}, {
	"domains": autoguard.guards.Array.of(autoguard.guards.Reference.of(() => Domain)),
	"http": autoguard.guards.Number,
	"https": autoguard.guards.Number,
	"sign": autoguard.guards.Boolean
});

export type Options = autoguard.guards.Object<{}, {
	"domains": autoguard.guards.Array<autoguard.guards.Reference<Domain>>,
	"http": autoguard.guards.Number,
	"https": autoguard.guards.Number,
	"sign": autoguard.guards.Boolean
}>;

export namespace Autoguard {
	export const Guards = {
		"Handler": autoguard.guards.Reference.of(() => Handler),
		"Domain": autoguard.guards.Reference.of(() => Domain),
		"Options": autoguard.guards.Reference.of(() => Options)
	};

	export type Guards = { [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>; };

	export const Requests = {};

	export type Requests = { [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>; };

	export const Responses = {};

	export type Responses = { [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>; };
};
