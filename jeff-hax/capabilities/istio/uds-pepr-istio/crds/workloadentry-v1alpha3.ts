// This file is auto-generated by kubernetes-fluent-client, do not edit manually

import { GenericKind, RegisterKind } from "kubernetes-fluent-client";

export class WorkloadEntry extends GenericKind {
  /**
   * Configuration affecting VMs onboarded into the mesh. See more details at:
   * https://istio.io/docs/reference/config/networking/workload-entry.html
   */
  spec?: Spec;
  status?: { [key: string]: unknown };
}

/**
 * Configuration affecting VMs onboarded into the mesh. See more details at:
 * https://istio.io/docs/reference/config/networking/workload-entry.html
 */
export interface Spec {
  /**
   * Address associated with the network endpoint without the port.
   */
  address?: string;
  /**
   * One or more labels associated with the endpoint.
   */
  labels?: { [key: string]: string };
  /**
   * The locality associated with the endpoint.
   */
  locality?: string;
  /**
   * Network enables Istio to group endpoints resident in the same L3 domain/network.
   */
  network?: string;
  /**
   * Set of ports associated with the endpoint.
   */
  ports?: { [key: string]: number };
  /**
   * The service account associated with the workload if a sidecar is present in the workload.
   */
  serviceAccount?: string;
  /**
   * The load balancing weight associated with the endpoint.
   */
  weight?: number;
}

RegisterKind(WorkloadEntry, {
  group: "networking.istio.io",
  version: "v1alpha3",
  kind: "WorkloadEntry",
});
