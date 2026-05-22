# gRPC API — [Package name]

> `[package][.version]` — served on `[host:port]` with [TLS / mutual TLS] policy.

## Services & RPCs
```protobuf
service [ItemService] {
  rpc GetItem (GetItemRequest) returns (GetItemResponse) {}
  rpc ListItems (ListItemsRequest) returns (stream [Item]) {}
}
```

| RPC | Idempotent | Semantics | Notes |
| --- | --- | --- | --- |
| `GetItem` | yes | at-most-once | [cache-friendly] |
| `ListItems` | yes | [server stream] | [backpressure: flow control] |

## Messages
```protobuf
message GetItemRequest { string id = 1; }
message GetItemResponse { [Item] item = 1; [google.rpc.Status] error = 2; }
```

## Metadata (headers)
| Key | Carried in | Value |
| --- | --- | --- |
| `authorization` | Call credentials | [Bearer] |
| `[x-request-id]` | Request | [UUID] — propagate for tracing
| `[x-deadline-ms]` | [optional] | [relative deadline] |

## Status & errors
- **Mapping:** gRPC [code] → [user-facing string / HTTP 502]
- **Details:** [google.rpc.ErrorInfo / LocalizedMessage] in `[Status.details]`

## Versioning
- **Compatibility:** [wire-compatible field adds | reserved tags]
- **Breaking change process:** [bump `[package]` with migration guide link]

## Client example
```ts
import { [ItemServiceClient] } from "[generated/path]";
const c = new [ItemServiceClient]("[host:port]", creds, { "grpc.max_receive_message_length": 8 << 20 });
```
