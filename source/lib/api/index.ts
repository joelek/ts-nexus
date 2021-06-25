// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard";

export namespace Autoguard {
	export const Guards = {};

	export type Guards = { [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>; };

	export const Requests = {
		"getStaticContent": autoguard.guards.Object.of({
			"options": autoguard.guards.Union.of(
				autoguard.guards.Intersection.of(
					autoguard.guards.Object.of({
						"filename": autoguard.guards.Union.of(
							autoguard.guards.Array.of(autoguard.guards.String),
							autoguard.guards.Undefined
						)
					}),
					autoguard.api.Options
				),
				autoguard.guards.Undefined
			),
			"headers": autoguard.guards.Union.of(
				autoguard.guards.Intersection.of(
					autoguard.guards.Object.of({}),
					autoguard.api.Headers
				),
				autoguard.guards.Undefined
			),
			"payload": autoguard.guards.Union.of(
				autoguard.api.Binary,
				autoguard.guards.Undefined
			)
		})
	};

	export type Requests = { [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>; };

	export const Responses = {
		"getStaticContent": autoguard.guards.Object.of({
			"status": autoguard.guards.Union.of(
				autoguard.guards.Number,
				autoguard.guards.Undefined
			),
			"headers": autoguard.guards.Union.of(
				autoguard.guards.Intersection.of(
					autoguard.guards.Object.of({}),
					autoguard.api.Headers
				),
				autoguard.guards.Undefined
			),
			"payload": autoguard.guards.Union.of(
				autoguard.api.Binary,
				autoguard.guards.Undefined
			)
		})
	};

	export type Responses = { [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>; };
};
