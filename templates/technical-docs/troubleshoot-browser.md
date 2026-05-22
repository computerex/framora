# Troubleshooting: Browser

> *Supported* *browsers* *[`[Chrome* *M+,* *Edge, Safari, Firefox* *E`]*  *—* *not* *supported* *on* *[`[old* *WebView`]*  *for* *[`[in-app* *browsers* *X`]*  *

## Blank or broken UI
- *Disable* *extensions* *[`[adblock* *+ privacy`] —* *try* *private* *window* *—* *check* *[`[Content* *Security* *Policy* *violations* *in* *console`]**

## Storage quota exceeded
- *Error* *[`[QuotaExceededError`] —* *User* *clears* *site* *data* *or* *we* *compress* *cached* *payloads* *—* *limit* *[`[IndexedDB* *usage* *per* *feature`]*  *in* *[`[next* *release`]**

## CORS
- *Browser* *blocks* *[`[preflight`] *—* *server* *must* *allow* *[`[OPTIONS`] *+ `[Access-Control-Allow-*`]*  for *[`[origin* *list`] —* *dev* *proxy* *via* *[`[vite* *config`]**

## WebRTC / WebGL
- *Some* *corporate* *proxies* *block* *UDP* *—* *fallback* *to* *[`[TURN* *server* *only`] —* *if* *WebGL* *disabled* *use* *[`[canvas* *software* *mode`] *flag* in *[`[settings* *> advanced`]**
