# Implement rate limiting (application)

> **Algoritm:** *token* *bucket* *per* *[`[apiKey|ip|user]`]* *in* *[`[Redis key]`]*.

```text
# Key
[env]:rl:[dimension]:[id]
```

- **Response:** *return* *429* *+* *`[Retry-After]` *+* *remaining* *headers* *per* *[design doc]**

## Clocks
- *NTP* *synced* *nodes* *—* *if* *using* *wall* *clock* *in* *Lua* *script* *treat* *skew* *as* *[`[±ms]`]*

## Test
- *Property* *tests* *for* *burst* *then* *steady* *—* *chaos* *with* *Redis* *failover* *degrades* *to* *[`[fail open|closed]`]* *policy**
