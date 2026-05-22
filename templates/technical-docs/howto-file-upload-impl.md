# Add file uploads (application)

> **Policy:** *Allow* *[mime] only]* *and* *max* *[N]* *MB* *—* *scan* *before* *attach* to *[`[Record]`]*.

## Flow
1. *Client* *requests* *`[POST /uploads/sessions]`*
2. *Server* *returns* *presigned* *URL* *+* *required* *headers* *+ *`[sha256] expected`*
3. *After* *PUT* *complete* *+ *`[antivirus]` *pass* *—* *link* *file* *to* *resource*

```ts
if (!allowedMime.has(file.type)) return 400;
if (file.size > MAX_BYTES) return 413;
```

## Storage
- *Private* *bucket* *—* *short-lived* *signed* *GET* *for* *download* *—* *audit* *log* *who* *accessed*
