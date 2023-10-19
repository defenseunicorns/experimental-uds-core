// This file is auto-generated by kubernetes-fluent-client, do not edit manually

import { GenericKind, RegisterKind } from "kubernetes-fluent-client";

export class Telemetry extends GenericKind {
    /**
     * Telemetry configuration for workloads. See more details at:
     * https://istio.io/docs/reference/config/telemetry.html
     */
    spec?:   Spec;
    status?: { [key: string]: unknown };
}

/**
 * Telemetry configuration for workloads. See more details at:
 * https://istio.io/docs/reference/config/telemetry.html
 */
export interface Spec {
    /**
     * Optional.
     */
    accessLogging?: AccessLogging[];
    /**
     * Optional.
     */
    metrics?: MetricElement[];
    /**
     * Optional.
     */
    selector?:  Selector;
    targetRef?: TargetRef;
    /**
     * Optional.
     */
    tracing?: Tracing[];
}

export interface AccessLogging {
    /**
     * Controls logging.
     */
    disabled?: boolean;
    /**
     * Optional.
     */
    filter?: Filter;
    /**
     * Allows tailoring of logging behavior to specific conditions.
     */
    match?: AccessLoggingMatch;
    /**
     * Optional.
     */
    providers?: AccessLoggingProvider[];
}

/**
 * Optional.
 */
export interface Filter {
    /**
     * CEL expression for selecting when requests/connections should be logged.
     */
    expression?: string;
}

/**
 * Allows tailoring of logging behavior to specific conditions.
 */
export interface AccessLoggingMatch {
    /**
     * This determines whether or not to apply the access logging configuration based on the
     * direction of traffic relative to the proxied workload.
     */
    mode?: Mode;
}

/**
 * This determines whether or not to apply the access logging configuration based on the
 * direction of traffic relative to the proxied workload.
 *
 * Controls which mode of metrics generation is selected: CLIENT and/or SERVER.
 *
 * This determines whether or not to apply the tracing configuration based on the direction
 * of traffic relative to the proxied workload.
 */
export enum Mode {
    Client = "CLIENT",
    ClientAndServer = "CLIENT_AND_SERVER",
    Server = "SERVER",
}

export interface AccessLoggingProvider {
    /**
     * Required.
     */
    name?: string;
}

export interface MetricElement {
    /**
     * Optional.
     */
    overrides?: Override[];
    /**
     * Optional.
     */
    providers?: MetricProvider[];
    /**
     * Optional.
     */
    reportingInterval?: string;
}

export interface Override {
    /**
     * Optional.
     */
    disabled?: boolean;
    /**
     * Match allows provides the scope of the override.
     */
    match?: OverrideMatch;
    /**
     * Optional.
     */
    tagOverrides?: { [key: string]: TagOverride };
}

/**
 * Match allows provides the scope of the override.
 */
export interface OverrideMatch {
    /**
     * Allows free-form specification of a metric.
     */
    customMetric?: string;
    /**
     * One of the well-known Istio Standard Metrics.
     */
    metric?: MetricEnum;
    /**
     * Controls which mode of metrics generation is selected: CLIENT and/or SERVER.
     */
    mode?: Mode;
}

/**
 * One of the well-known Istio Standard Metrics.
 */
export enum MetricEnum {
    AllMetrics = "ALL_METRICS",
    GrpcRequestMessages = "GRPC_REQUEST_MESSAGES",
    GrpcResponseMessages = "GRPC_RESPONSE_MESSAGES",
    RequestCount = "REQUEST_COUNT",
    RequestDuration = "REQUEST_DURATION",
    RequestSize = "REQUEST_SIZE",
    ResponseSize = "RESPONSE_SIZE",
    TCPClosedConnections = "TCP_CLOSED_CONNECTIONS",
    TCPOpenedConnections = "TCP_OPENED_CONNECTIONS",
    TCPReceivedBytes = "TCP_RECEIVED_BYTES",
    TCPSentBytes = "TCP_SENT_BYTES",
}

export interface TagOverride {
    /**
     * Operation controls whether or not to update/add a tag, or to remove it.
     */
    operation?: Operation;
    /**
     * Value is only considered if the operation is `UPSERT`.
     */
    value?: string;
}

/**
 * Operation controls whether or not to update/add a tag, or to remove it.
 */
export enum Operation {
    Remove = "REMOVE",
    Upsert = "UPSERT",
}

export interface MetricProvider {
    /**
     * Required.
     */
    name?: string;
}

/**
 * Optional.
 */
export interface Selector {
    /**
     * One or more labels that indicate a specific set of pods/VMs on which a policy should be
     * applied.
     */
    matchLabels?: { [key: string]: string };
}

export interface TargetRef {
    group?:     string;
    kind?:      string;
    name?:      string;
    namespace?: string;
}

export interface Tracing {
    /**
     * Optional.
     */
    customTags?: { [key: string]: CustomTag };
    /**
     * Controls span reporting.
     */
    disableSpanReporting?: boolean;
    /**
     * Allows tailoring of behavior to specific conditions.
     */
    match?: TracingMatch;
    /**
     * Optional.
     */
    providers?: TracingProvider[];
    /**
     * Controls the rate at which traffic will be selected for tracing if no prior sampling
     * decision has been made.
     */
    randomSamplingPercentage?:     number;
    useRequestIdForTraceSampling?: boolean;
}

export interface CustomTag {
    /**
     * Environment adds the value of an environment variable to each span.
     */
    environment?: Environment;
    /**
     * RequestHeader adds the value of an header from the request to each span.
     */
    header?: Header;
    /**
     * Literal adds the same, hard-coded value to each span.
     */
    literal?: Literal;
}

/**
 * Environment adds the value of an environment variable to each span.
 */
export interface Environment {
    /**
     * Optional.
     */
    defaultValue?: string;
    /**
     * Name of the environment variable from which to extract the tag value.
     */
    name?: string;
}

/**
 * RequestHeader adds the value of an header from the request to each span.
 */
export interface Header {
    /**
     * Optional.
     */
    defaultValue?: string;
    /**
     * Name of the header from which to extract the tag value.
     */
    name?: string;
}

/**
 * Literal adds the same, hard-coded value to each span.
 */
export interface Literal {
    /**
     * The tag value to use.
     */
    value?: string;
}

/**
 * Allows tailoring of behavior to specific conditions.
 */
export interface TracingMatch {
    /**
     * This determines whether or not to apply the tracing configuration based on the direction
     * of traffic relative to the proxied workload.
     */
    mode?: Mode;
}

export interface TracingProvider {
    /**
     * Required.
     */
    name?: string;
}

RegisterKind(Telemetry, {
  group: "telemetry.istio.io",
  version: "v1alpha1",
  kind: "Telemetry",
});