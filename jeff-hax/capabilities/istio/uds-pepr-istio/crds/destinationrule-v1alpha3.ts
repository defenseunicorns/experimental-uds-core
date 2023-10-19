// This file is auto-generated by kubernetes-fluent-client, do not edit manually

import { GenericKind, RegisterKind } from "kubernetes-fluent-client";

export class DestinationRule extends GenericKind {
  /**
   * Configuration affecting load balancing, outlier detection, etc. See more details at:
   * https://istio.io/docs/reference/config/networking/destination-rule.html
   */
  spec?: Spec;
  status?: { [key: string]: unknown };
}

/**
 * Configuration affecting load balancing, outlier detection, etc. See more details at:
 * https://istio.io/docs/reference/config/networking/destination-rule.html
 */
export interface Spec {
  /**
   * A list of namespaces to which this destination rule is exported.
   */
  exportTo?: string[];
  /**
   * The name of a service from the service registry.
   */
  host?: string;
  /**
   * One or more named sets that represent individual versions of a service.
   */
  subsets?: Subset[];
  /**
   * Traffic policies to apply (load balancing policy, connection pool sizes, outlier
   * detection).
   */
  trafficPolicy?: SpecTrafficPolicy;
  /**
   * Criteria used to select the specific set of pods/VMs on which this `DestinationRule`
   * configuration should be applied.
   */
  workloadSelector?: WorkloadSelector;
}

export interface Subset {
  /**
   * Labels apply a filter over the endpoints of a service in the service registry.
   */
  labels?: { [key: string]: string };
  /**
   * Name of the subset.
   */
  name?: string;
  /**
   * Traffic policies that apply to this subset.
   */
  trafficPolicy?: SubsetTrafficPolicy;
}

/**
 * Traffic policies that apply to this subset.
 */
export interface SubsetTrafficPolicy {
  connectionPool?: PurpleConnectionPool;
  /**
   * Settings controlling the load balancer algorithms.
   */
  loadBalancer?: PurpleLoadBalancer;
  outlierDetection?: PurpleOutlierDetection;
  /**
   * Traffic policies specific to individual ports.
   */
  portLevelSettings?: PurplePortLevelSetting[];
  /**
   * TLS related settings for connections to the upstream service.
   */
  tls?: FluffyTLS;
  /**
   * Configuration of tunneling TCP over other transport or application layers for the host
   * configured in the DestinationRule.
   */
  tunnel?: PurpleTunnel;
}

export interface PurpleConnectionPool {
  /**
   * HTTP connection pool settings.
   */
  http?: PurpleHTTP;
  /**
   * Settings common to both HTTP and TCP upstream connections.
   */
  tcp?: PurpleTCP;
}

/**
 * HTTP connection pool settings.
 */
export interface PurpleHTTP {
  /**
   * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
   */
  h2UpgradePolicy?: H2UpgradePolicy;
  /**
   * Maximum number of requests that will be queued while waiting for a ready connection pool
   * connection.
   */
  http1MaxPendingRequests?: number;
  /**
   * Maximum number of active requests to a destination.
   */
  http2MaxRequests?: number;
  /**
   * The idle timeout for upstream connection pool connections.
   */
  idleTimeout?: string;
  /**
   * Maximum number of requests per connection to a backend.
   */
  maxRequestsPerConnection?: number;
  /**
   * Maximum number of retries that can be outstanding to all hosts in a cluster at a given
   * time.
   */
  maxRetries?: number;
  /**
   * If set to true, client protocol will be preserved while initiating connection to backend.
   */
  useClientProtocol?: boolean;
}

/**
 * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
 */
export enum H2UpgradePolicy {
  Default = "DEFAULT",
  DoNotUpgrade = "DO_NOT_UPGRADE",
  Upgrade = "UPGRADE",
}

/**
 * Settings common to both HTTP and TCP upstream connections.
 */
export interface PurpleTCP {
  /**
   * TCP connection timeout.
   */
  connectTimeout?: string;
  /**
   * The maximum duration of a connection.
   */
  maxConnectionDuration?: string;
  /**
   * Maximum number of HTTP1 /TCP connections to a destination host.
   */
  maxConnections?: number;
  /**
   * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
   */
  tcpKeepalive?: PurpleTCPKeepalive;
}

/**
 * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
 */
export interface PurpleTCPKeepalive {
  /**
   * The time duration between keep-alive probes.
   */
  interval?: string;
  /**
   * Maximum number of keepalive probes to send without response before deciding the
   * connection is dead.
   */
  probes?: number;
  /**
   * The time duration a connection needs to be idle before keep-alive probes start being sent.
   */
  time?: string;
}

/**
 * Settings controlling the load balancer algorithms.
 */
export interface PurpleLoadBalancer {
  consistentHash?: PurpleConsistentHash;
  localityLbSetting?: PurpleLocalityLBSetting;
  simple?: Simple;
  /**
   * Represents the warmup duration of Service.
   */
  warmupDurationSecs?: string;
}

export interface PurpleConsistentHash {
  /**
   * Hash based on HTTP cookie.
   */
  httpCookie?: PurpleHTTPCookie;
  /**
   * Hash based on a specific HTTP header.
   */
  httpHeaderName?: string;
  /**
   * Hash based on a specific HTTP query parameter.
   */
  httpQueryParameterName?: string;
  /**
   * The Maglev load balancer implements consistent hashing to backend hosts.
   */
  maglev?: PurpleMaglev;
  /**
   * Deprecated.
   */
  minimumRingSize?: number;
  /**
   * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
   */
  ringHash?: PurpleRingHash;
  /**
   * Hash based on the source IP address.
   */
  useSourceIp?: boolean;
}

/**
 * Hash based on HTTP cookie.
 */
export interface PurpleHTTPCookie {
  /**
   * Name of the cookie.
   */
  name?: string;
  /**
   * Path to set for the cookie.
   */
  path?: string;
  /**
   * Lifetime of the cookie.
   */
  ttl?: string;
}

/**
 * The Maglev load balancer implements consistent hashing to backend hosts.
 */
export interface PurpleMaglev {
  /**
   * The table size for Maglev hashing.
   */
  tableSize?: number;
}

/**
 * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
 */
export interface PurpleRingHash {
  /**
   * The minimum number of virtual nodes to use for the hash ring.
   */
  minimumRingSize?: number;
}

export interface PurpleLocalityLBSetting {
  /**
   * Optional: only one of distribute, failover or failoverPriority can be set.
   */
  distribute?: PurpleDistribute[];
  /**
   * enable locality load balancing, this is DestinationRule-level and will override mesh wide
   * settings in entirety.
   */
  enabled?: boolean;
  /**
   * Optional: only one of distribute, failover or failoverPriority can be set.
   */
  failover?: PurpleFailover[];
  /**
   * failoverPriority is an ordered list of labels used to sort endpoints to do priority based
   * load balancing.
   */
  failoverPriority?: string[];
}

export interface PurpleDistribute {
  /**
   * Originating locality, '/' separated, e.g.
   */
  from?: string;
  /**
   * Map of upstream localities to traffic distribution weights.
   */
  to?: { [key: string]: number };
}

export interface PurpleFailover {
  /**
   * Originating region.
   */
  from?: string;
  /**
   * Destination region the traffic will fail over to when endpoints in the 'from' region
   * becomes unhealthy.
   */
  to?: string;
}

export enum Simple {
  LeastConn = "LEAST_CONN",
  LeastRequest = "LEAST_REQUEST",
  Passthrough = "PASSTHROUGH",
  Random = "RANDOM",
  RoundRobin = "ROUND_ROBIN",
  Unspecified = "UNSPECIFIED",
}

export interface PurpleOutlierDetection {
  /**
   * Minimum ejection duration.
   */
  baseEjectionTime?: string;
  /**
   * Number of 5xx errors before a host is ejected from the connection pool.
   */
  consecutive5xxErrors?: number;
  consecutiveErrors?: number;
  /**
   * Number of gateway errors before a host is ejected from the connection pool.
   */
  consecutiveGatewayErrors?: number;
  /**
   * The number of consecutive locally originated failures before ejection occurs.
   */
  consecutiveLocalOriginFailures?: number;
  /**
   * Time interval between ejection sweep analysis.
   */
  interval?: string;
  /**
   * Maximum % of hosts in the load balancing pool for the upstream service that can be
   * ejected.
   */
  maxEjectionPercent?: number;
  /**
   * Outlier detection will be enabled as long as the associated load balancing pool has at
   * least min_health_percent hosts in healthy mode.
   */
  minHealthPercent?: number;
  /**
   * Determines whether to distinguish local origin failures from external errors.
   */
  splitExternalLocalOriginErrors?: boolean;
}

export interface PurplePortLevelSetting {
  connectionPool?: FluffyConnectionPool;
  /**
   * Settings controlling the load balancer algorithms.
   */
  loadBalancer?: FluffyLoadBalancer;
  outlierDetection?: FluffyOutlierDetection;
  /**
   * Specifies the number of a port on the destination service on which this policy is being
   * applied.
   */
  port?: PurplePort;
  /**
   * TLS related settings for connections to the upstream service.
   */
  tls?: PurpleTLS;
}

export interface FluffyConnectionPool {
  /**
   * HTTP connection pool settings.
   */
  http?: FluffyHTTP;
  /**
   * Settings common to both HTTP and TCP upstream connections.
   */
  tcp?: FluffyTCP;
}

/**
 * HTTP connection pool settings.
 */
export interface FluffyHTTP {
  /**
   * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
   */
  h2UpgradePolicy?: H2UpgradePolicy;
  /**
   * Maximum number of requests that will be queued while waiting for a ready connection pool
   * connection.
   */
  http1MaxPendingRequests?: number;
  /**
   * Maximum number of active requests to a destination.
   */
  http2MaxRequests?: number;
  /**
   * The idle timeout for upstream connection pool connections.
   */
  idleTimeout?: string;
  /**
   * Maximum number of requests per connection to a backend.
   */
  maxRequestsPerConnection?: number;
  /**
   * Maximum number of retries that can be outstanding to all hosts in a cluster at a given
   * time.
   */
  maxRetries?: number;
  /**
   * If set to true, client protocol will be preserved while initiating connection to backend.
   */
  useClientProtocol?: boolean;
}

/**
 * Settings common to both HTTP and TCP upstream connections.
 */
export interface FluffyTCP {
  /**
   * TCP connection timeout.
   */
  connectTimeout?: string;
  /**
   * The maximum duration of a connection.
   */
  maxConnectionDuration?: string;
  /**
   * Maximum number of HTTP1 /TCP connections to a destination host.
   */
  maxConnections?: number;
  /**
   * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
   */
  tcpKeepalive?: FluffyTCPKeepalive;
}

/**
 * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
 */
export interface FluffyTCPKeepalive {
  /**
   * The time duration between keep-alive probes.
   */
  interval?: string;
  /**
   * Maximum number of keepalive probes to send without response before deciding the
   * connection is dead.
   */
  probes?: number;
  /**
   * The time duration a connection needs to be idle before keep-alive probes start being sent.
   */
  time?: string;
}

/**
 * Settings controlling the load balancer algorithms.
 */
export interface FluffyLoadBalancer {
  consistentHash?: FluffyConsistentHash;
  localityLbSetting?: FluffyLocalityLBSetting;
  simple?: Simple;
  /**
   * Represents the warmup duration of Service.
   */
  warmupDurationSecs?: string;
}

export interface FluffyConsistentHash {
  /**
   * Hash based on HTTP cookie.
   */
  httpCookie?: FluffyHTTPCookie;
  /**
   * Hash based on a specific HTTP header.
   */
  httpHeaderName?: string;
  /**
   * Hash based on a specific HTTP query parameter.
   */
  httpQueryParameterName?: string;
  /**
   * The Maglev load balancer implements consistent hashing to backend hosts.
   */
  maglev?: FluffyMaglev;
  /**
   * Deprecated.
   */
  minimumRingSize?: number;
  /**
   * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
   */
  ringHash?: FluffyRingHash;
  /**
   * Hash based on the source IP address.
   */
  useSourceIp?: boolean;
}

/**
 * Hash based on HTTP cookie.
 */
export interface FluffyHTTPCookie {
  /**
   * Name of the cookie.
   */
  name?: string;
  /**
   * Path to set for the cookie.
   */
  path?: string;
  /**
   * Lifetime of the cookie.
   */
  ttl?: string;
}

/**
 * The Maglev load balancer implements consistent hashing to backend hosts.
 */
export interface FluffyMaglev {
  /**
   * The table size for Maglev hashing.
   */
  tableSize?: number;
}

/**
 * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
 */
export interface FluffyRingHash {
  /**
   * The minimum number of virtual nodes to use for the hash ring.
   */
  minimumRingSize?: number;
}

export interface FluffyLocalityLBSetting {
  /**
   * Optional: only one of distribute, failover or failoverPriority can be set.
   */
  distribute?: FluffyDistribute[];
  /**
   * enable locality load balancing, this is DestinationRule-level and will override mesh wide
   * settings in entirety.
   */
  enabled?: boolean;
  /**
   * Optional: only one of distribute, failover or failoverPriority can be set.
   */
  failover?: FluffyFailover[];
  /**
   * failoverPriority is an ordered list of labels used to sort endpoints to do priority based
   * load balancing.
   */
  failoverPriority?: string[];
}

export interface FluffyDistribute {
  /**
   * Originating locality, '/' separated, e.g.
   */
  from?: string;
  /**
   * Map of upstream localities to traffic distribution weights.
   */
  to?: { [key: string]: number };
}

export interface FluffyFailover {
  /**
   * Originating region.
   */
  from?: string;
  /**
   * Destination region the traffic will fail over to when endpoints in the 'from' region
   * becomes unhealthy.
   */
  to?: string;
}

export interface FluffyOutlierDetection {
  /**
   * Minimum ejection duration.
   */
  baseEjectionTime?: string;
  /**
   * Number of 5xx errors before a host is ejected from the connection pool.
   */
  consecutive5xxErrors?: number;
  consecutiveErrors?: number;
  /**
   * Number of gateway errors before a host is ejected from the connection pool.
   */
  consecutiveGatewayErrors?: number;
  /**
   * The number of consecutive locally originated failures before ejection occurs.
   */
  consecutiveLocalOriginFailures?: number;
  /**
   * Time interval between ejection sweep analysis.
   */
  interval?: string;
  /**
   * Maximum % of hosts in the load balancing pool for the upstream service that can be
   * ejected.
   */
  maxEjectionPercent?: number;
  /**
   * Outlier detection will be enabled as long as the associated load balancing pool has at
   * least min_health_percent hosts in healthy mode.
   */
  minHealthPercent?: number;
  /**
   * Determines whether to distinguish local origin failures from external errors.
   */
  splitExternalLocalOriginErrors?: boolean;
}

/**
 * Specifies the number of a port on the destination service on which this policy is being
 * applied.
 */
export interface PurplePort {
  number?: number;
}

/**
 * TLS related settings for connections to the upstream service.
 */
export interface PurpleTLS {
  /**
   * OPTIONAL: The path to the file containing certificate authority certificates to use in
   * verifying a presented server certificate.
   */
  caCertificates?: string;
  /**
   * REQUIRED if mode is `MUTUAL`.
   */
  clientCertificate?: string;
  /**
   * The name of the secret that holds the TLS certs for the client including the CA
   * certificates.
   */
  credentialName?: string;
  /**
   * InsecureSkipVerify specifies whether the proxy should skip verifying the CA signature and
   * SAN for the server certificate corresponding to the host.
   */
  insecureSkipVerify?: boolean;
  /**
   * Indicates whether connections to this port should be secured using TLS.
   */
  mode?: Mode;
  /**
   * REQUIRED if mode is `MUTUAL`.
   */
  privateKey?: string;
  /**
   * SNI string to present to the server during TLS handshake.
   */
  sni?: string;
  /**
   * A list of alternate names to verify the subject identity in the certificate.
   */
  subjectAltNames?: string[];
}

/**
 * Indicates whether connections to this port should be secured using TLS.
 */
export enum Mode {
  Disable = "DISABLE",
  IstioMutual = "ISTIO_MUTUAL",
  Mutual = "MUTUAL",
  Simple = "SIMPLE",
}

/**
 * TLS related settings for connections to the upstream service.
 */
export interface FluffyTLS {
  /**
   * OPTIONAL: The path to the file containing certificate authority certificates to use in
   * verifying a presented server certificate.
   */
  caCertificates?: string;
  /**
   * REQUIRED if mode is `MUTUAL`.
   */
  clientCertificate?: string;
  /**
   * The name of the secret that holds the TLS certs for the client including the CA
   * certificates.
   */
  credentialName?: string;
  /**
   * InsecureSkipVerify specifies whether the proxy should skip verifying the CA signature and
   * SAN for the server certificate corresponding to the host.
   */
  insecureSkipVerify?: boolean;
  /**
   * Indicates whether connections to this port should be secured using TLS.
   */
  mode?: Mode;
  /**
   * REQUIRED if mode is `MUTUAL`.
   */
  privateKey?: string;
  /**
   * SNI string to present to the server during TLS handshake.
   */
  sni?: string;
  /**
   * A list of alternate names to verify the subject identity in the certificate.
   */
  subjectAltNames?: string[];
}

/**
 * Configuration of tunneling TCP over other transport or application layers for the host
 * configured in the DestinationRule.
 */
export interface PurpleTunnel {
  /**
   * Specifies which protocol to use for tunneling the downstream connection.
   */
  protocol?: string;
  /**
   * Specifies a host to which the downstream connection is tunneled.
   */
  targetHost?: string;
  /**
   * Specifies a port to which the downstream connection is tunneled.
   */
  targetPort?: number;
}

/**
 * Traffic policies to apply (load balancing policy, connection pool sizes, outlier
 * detection).
 */
export interface SpecTrafficPolicy {
  connectionPool?: TentacledConnectionPool;
  /**
   * Settings controlling the load balancer algorithms.
   */
  loadBalancer?: TentacledLoadBalancer;
  outlierDetection?: TentacledOutlierDetection;
  /**
   * Traffic policies specific to individual ports.
   */
  portLevelSettings?: FluffyPortLevelSetting[];
  /**
   * TLS related settings for connections to the upstream service.
   */
  tls?: StickyTLS;
  /**
   * Configuration of tunneling TCP over other transport or application layers for the host
   * configured in the DestinationRule.
   */
  tunnel?: FluffyTunnel;
}

export interface TentacledConnectionPool {
  /**
   * HTTP connection pool settings.
   */
  http?: TentacledHTTP;
  /**
   * Settings common to both HTTP and TCP upstream connections.
   */
  tcp?: TentacledTCP;
}

/**
 * HTTP connection pool settings.
 */
export interface TentacledHTTP {
  /**
   * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
   */
  h2UpgradePolicy?: H2UpgradePolicy;
  /**
   * Maximum number of requests that will be queued while waiting for a ready connection pool
   * connection.
   */
  http1MaxPendingRequests?: number;
  /**
   * Maximum number of active requests to a destination.
   */
  http2MaxRequests?: number;
  /**
   * The idle timeout for upstream connection pool connections.
   */
  idleTimeout?: string;
  /**
   * Maximum number of requests per connection to a backend.
   */
  maxRequestsPerConnection?: number;
  /**
   * Maximum number of retries that can be outstanding to all hosts in a cluster at a given
   * time.
   */
  maxRetries?: number;
  /**
   * If set to true, client protocol will be preserved while initiating connection to backend.
   */
  useClientProtocol?: boolean;
}

/**
 * Settings common to both HTTP and TCP upstream connections.
 */
export interface TentacledTCP {
  /**
   * TCP connection timeout.
   */
  connectTimeout?: string;
  /**
   * The maximum duration of a connection.
   */
  maxConnectionDuration?: string;
  /**
   * Maximum number of HTTP1 /TCP connections to a destination host.
   */
  maxConnections?: number;
  /**
   * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
   */
  tcpKeepalive?: TentacledTCPKeepalive;
}

/**
 * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
 */
export interface TentacledTCPKeepalive {
  /**
   * The time duration between keep-alive probes.
   */
  interval?: string;
  /**
   * Maximum number of keepalive probes to send without response before deciding the
   * connection is dead.
   */
  probes?: number;
  /**
   * The time duration a connection needs to be idle before keep-alive probes start being sent.
   */
  time?: string;
}

/**
 * Settings controlling the load balancer algorithms.
 */
export interface TentacledLoadBalancer {
  consistentHash?: TentacledConsistentHash;
  localityLbSetting?: TentacledLocalityLBSetting;
  simple?: Simple;
  /**
   * Represents the warmup duration of Service.
   */
  warmupDurationSecs?: string;
}

export interface TentacledConsistentHash {
  /**
   * Hash based on HTTP cookie.
   */
  httpCookie?: TentacledHTTPCookie;
  /**
   * Hash based on a specific HTTP header.
   */
  httpHeaderName?: string;
  /**
   * Hash based on a specific HTTP query parameter.
   */
  httpQueryParameterName?: string;
  /**
   * The Maglev load balancer implements consistent hashing to backend hosts.
   */
  maglev?: TentacledMaglev;
  /**
   * Deprecated.
   */
  minimumRingSize?: number;
  /**
   * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
   */
  ringHash?: TentacledRingHash;
  /**
   * Hash based on the source IP address.
   */
  useSourceIp?: boolean;
}

/**
 * Hash based on HTTP cookie.
 */
export interface TentacledHTTPCookie {
  /**
   * Name of the cookie.
   */
  name?: string;
  /**
   * Path to set for the cookie.
   */
  path?: string;
  /**
   * Lifetime of the cookie.
   */
  ttl?: string;
}

/**
 * The Maglev load balancer implements consistent hashing to backend hosts.
 */
export interface TentacledMaglev {
  /**
   * The table size for Maglev hashing.
   */
  tableSize?: number;
}

/**
 * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
 */
export interface TentacledRingHash {
  /**
   * The minimum number of virtual nodes to use for the hash ring.
   */
  minimumRingSize?: number;
}

export interface TentacledLocalityLBSetting {
  /**
   * Optional: only one of distribute, failover or failoverPriority can be set.
   */
  distribute?: TentacledDistribute[];
  /**
   * enable locality load balancing, this is DestinationRule-level and will override mesh wide
   * settings in entirety.
   */
  enabled?: boolean;
  /**
   * Optional: only one of distribute, failover or failoverPriority can be set.
   */
  failover?: TentacledFailover[];
  /**
   * failoverPriority is an ordered list of labels used to sort endpoints to do priority based
   * load balancing.
   */
  failoverPriority?: string[];
}

export interface TentacledDistribute {
  /**
   * Originating locality, '/' separated, e.g.
   */
  from?: string;
  /**
   * Map of upstream localities to traffic distribution weights.
   */
  to?: { [key: string]: number };
}

export interface TentacledFailover {
  /**
   * Originating region.
   */
  from?: string;
  /**
   * Destination region the traffic will fail over to when endpoints in the 'from' region
   * becomes unhealthy.
   */
  to?: string;
}

export interface TentacledOutlierDetection {
  /**
   * Minimum ejection duration.
   */
  baseEjectionTime?: string;
  /**
   * Number of 5xx errors before a host is ejected from the connection pool.
   */
  consecutive5xxErrors?: number;
  consecutiveErrors?: number;
  /**
   * Number of gateway errors before a host is ejected from the connection pool.
   */
  consecutiveGatewayErrors?: number;
  /**
   * The number of consecutive locally originated failures before ejection occurs.
   */
  consecutiveLocalOriginFailures?: number;
  /**
   * Time interval between ejection sweep analysis.
   */
  interval?: string;
  /**
   * Maximum % of hosts in the load balancing pool for the upstream service that can be
   * ejected.
   */
  maxEjectionPercent?: number;
  /**
   * Outlier detection will be enabled as long as the associated load balancing pool has at
   * least min_health_percent hosts in healthy mode.
   */
  minHealthPercent?: number;
  /**
   * Determines whether to distinguish local origin failures from external errors.
   */
  splitExternalLocalOriginErrors?: boolean;
}

export interface FluffyPortLevelSetting {
  connectionPool?: StickyConnectionPool;
  /**
   * Settings controlling the load balancer algorithms.
   */
  loadBalancer?: StickyLoadBalancer;
  outlierDetection?: StickyOutlierDetection;
  /**
   * Specifies the number of a port on the destination service on which this policy is being
   * applied.
   */
  port?: FluffyPort;
  /**
   * TLS related settings for connections to the upstream service.
   */
  tls?: TentacledTLS;
}

export interface StickyConnectionPool {
  /**
   * HTTP connection pool settings.
   */
  http?: StickyHTTP;
  /**
   * Settings common to both HTTP and TCP upstream connections.
   */
  tcp?: StickyTCP;
}

/**
 * HTTP connection pool settings.
 */
export interface StickyHTTP {
  /**
   * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
   */
  h2UpgradePolicy?: H2UpgradePolicy;
  /**
   * Maximum number of requests that will be queued while waiting for a ready connection pool
   * connection.
   */
  http1MaxPendingRequests?: number;
  /**
   * Maximum number of active requests to a destination.
   */
  http2MaxRequests?: number;
  /**
   * The idle timeout for upstream connection pool connections.
   */
  idleTimeout?: string;
  /**
   * Maximum number of requests per connection to a backend.
   */
  maxRequestsPerConnection?: number;
  /**
   * Maximum number of retries that can be outstanding to all hosts in a cluster at a given
   * time.
   */
  maxRetries?: number;
  /**
   * If set to true, client protocol will be preserved while initiating connection to backend.
   */
  useClientProtocol?: boolean;
}

/**
 * Settings common to both HTTP and TCP upstream connections.
 */
export interface StickyTCP {
  /**
   * TCP connection timeout.
   */
  connectTimeout?: string;
  /**
   * The maximum duration of a connection.
   */
  maxConnectionDuration?: string;
  /**
   * Maximum number of HTTP1 /TCP connections to a destination host.
   */
  maxConnections?: number;
  /**
   * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
   */
  tcpKeepalive?: StickyTCPKeepalive;
}

/**
 * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
 */
export interface StickyTCPKeepalive {
  /**
   * The time duration between keep-alive probes.
   */
  interval?: string;
  /**
   * Maximum number of keepalive probes to send without response before deciding the
   * connection is dead.
   */
  probes?: number;
  /**
   * The time duration a connection needs to be idle before keep-alive probes start being sent.
   */
  time?: string;
}

/**
 * Settings controlling the load balancer algorithms.
 */
export interface StickyLoadBalancer {
  consistentHash?: StickyConsistentHash;
  localityLbSetting?: StickyLocalityLBSetting;
  simple?: Simple;
  /**
   * Represents the warmup duration of Service.
   */
  warmupDurationSecs?: string;
}

export interface StickyConsistentHash {
  /**
   * Hash based on HTTP cookie.
   */
  httpCookie?: StickyHTTPCookie;
  /**
   * Hash based on a specific HTTP header.
   */
  httpHeaderName?: string;
  /**
   * Hash based on a specific HTTP query parameter.
   */
  httpQueryParameterName?: string;
  /**
   * The Maglev load balancer implements consistent hashing to backend hosts.
   */
  maglev?: StickyMaglev;
  /**
   * Deprecated.
   */
  minimumRingSize?: number;
  /**
   * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
   */
  ringHash?: StickyRingHash;
  /**
   * Hash based on the source IP address.
   */
  useSourceIp?: boolean;
}

/**
 * Hash based on HTTP cookie.
 */
export interface StickyHTTPCookie {
  /**
   * Name of the cookie.
   */
  name?: string;
  /**
   * Path to set for the cookie.
   */
  path?: string;
  /**
   * Lifetime of the cookie.
   */
  ttl?: string;
}

/**
 * The Maglev load balancer implements consistent hashing to backend hosts.
 */
export interface StickyMaglev {
  /**
   * The table size for Maglev hashing.
   */
  tableSize?: number;
}

/**
 * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
 */
export interface StickyRingHash {
  /**
   * The minimum number of virtual nodes to use for the hash ring.
   */
  minimumRingSize?: number;
}

export interface StickyLocalityLBSetting {
  /**
   * Optional: only one of distribute, failover or failoverPriority can be set.
   */
  distribute?: StickyDistribute[];
  /**
   * enable locality load balancing, this is DestinationRule-level and will override mesh wide
   * settings in entirety.
   */
  enabled?: boolean;
  /**
   * Optional: only one of distribute, failover or failoverPriority can be set.
   */
  failover?: StickyFailover[];
  /**
   * failoverPriority is an ordered list of labels used to sort endpoints to do priority based
   * load balancing.
   */
  failoverPriority?: string[];
}

export interface StickyDistribute {
  /**
   * Originating locality, '/' separated, e.g.
   */
  from?: string;
  /**
   * Map of upstream localities to traffic distribution weights.
   */
  to?: { [key: string]: number };
}

export interface StickyFailover {
  /**
   * Originating region.
   */
  from?: string;
  /**
   * Destination region the traffic will fail over to when endpoints in the 'from' region
   * becomes unhealthy.
   */
  to?: string;
}

export interface StickyOutlierDetection {
  /**
   * Minimum ejection duration.
   */
  baseEjectionTime?: string;
  /**
   * Number of 5xx errors before a host is ejected from the connection pool.
   */
  consecutive5xxErrors?: number;
  consecutiveErrors?: number;
  /**
   * Number of gateway errors before a host is ejected from the connection pool.
   */
  consecutiveGatewayErrors?: number;
  /**
   * The number of consecutive locally originated failures before ejection occurs.
   */
  consecutiveLocalOriginFailures?: number;
  /**
   * Time interval between ejection sweep analysis.
   */
  interval?: string;
  /**
   * Maximum % of hosts in the load balancing pool for the upstream service that can be
   * ejected.
   */
  maxEjectionPercent?: number;
  /**
   * Outlier detection will be enabled as long as the associated load balancing pool has at
   * least min_health_percent hosts in healthy mode.
   */
  minHealthPercent?: number;
  /**
   * Determines whether to distinguish local origin failures from external errors.
   */
  splitExternalLocalOriginErrors?: boolean;
}

/**
 * Specifies the number of a port on the destination service on which this policy is being
 * applied.
 */
export interface FluffyPort {
  number?: number;
}

/**
 * TLS related settings for connections to the upstream service.
 */
export interface TentacledTLS {
  /**
   * OPTIONAL: The path to the file containing certificate authority certificates to use in
   * verifying a presented server certificate.
   */
  caCertificates?: string;
  /**
   * REQUIRED if mode is `MUTUAL`.
   */
  clientCertificate?: string;
  /**
   * The name of the secret that holds the TLS certs for the client including the CA
   * certificates.
   */
  credentialName?: string;
  /**
   * InsecureSkipVerify specifies whether the proxy should skip verifying the CA signature and
   * SAN for the server certificate corresponding to the host.
   */
  insecureSkipVerify?: boolean;
  /**
   * Indicates whether connections to this port should be secured using TLS.
   */
  mode?: Mode;
  /**
   * REQUIRED if mode is `MUTUAL`.
   */
  privateKey?: string;
  /**
   * SNI string to present to the server during TLS handshake.
   */
  sni?: string;
  /**
   * A list of alternate names to verify the subject identity in the certificate.
   */
  subjectAltNames?: string[];
}

/**
 * TLS related settings for connections to the upstream service.
 */
export interface StickyTLS {
  /**
   * OPTIONAL: The path to the file containing certificate authority certificates to use in
   * verifying a presented server certificate.
   */
  caCertificates?: string;
  /**
   * REQUIRED if mode is `MUTUAL`.
   */
  clientCertificate?: string;
  /**
   * The name of the secret that holds the TLS certs for the client including the CA
   * certificates.
   */
  credentialName?: string;
  /**
   * InsecureSkipVerify specifies whether the proxy should skip verifying the CA signature and
   * SAN for the server certificate corresponding to the host.
   */
  insecureSkipVerify?: boolean;
  /**
   * Indicates whether connections to this port should be secured using TLS.
   */
  mode?: Mode;
  /**
   * REQUIRED if mode is `MUTUAL`.
   */
  privateKey?: string;
  /**
   * SNI string to present to the server during TLS handshake.
   */
  sni?: string;
  /**
   * A list of alternate names to verify the subject identity in the certificate.
   */
  subjectAltNames?: string[];
}

/**
 * Configuration of tunneling TCP over other transport or application layers for the host
 * configured in the DestinationRule.
 */
export interface FluffyTunnel {
  /**
   * Specifies which protocol to use for tunneling the downstream connection.
   */
  protocol?: string;
  /**
   * Specifies a host to which the downstream connection is tunneled.
   */
  targetHost?: string;
  /**
   * Specifies a port to which the downstream connection is tunneled.
   */
  targetPort?: number;
}

/**
 * Criteria used to select the specific set of pods/VMs on which this `DestinationRule`
 * configuration should be applied.
 */
export interface WorkloadSelector {
  /**
   * One or more labels that indicate a specific set of pods/VMs on which a policy should be
   * applied.
   */
  matchLabels?: { [key: string]: string };
}

RegisterKind(DestinationRule, {
  group: "networking.istio.io",
  version: "v1alpha3",
  kind: "DestinationRule",
});
