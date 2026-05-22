# Backup schedule — [System / data class]

| Tier | RPO | RTO | **Schedule** (UTC) | **Target** (region/store) | Last OK |
| --- | ---: | ---: | --- | --- | --- |
| T1 (critical) | [15m] | [1h] | [*/15 * * *] | [geo-A] | [ts] |

## Encryption, immutability, and restore tests
- **At rest / in flight** keys: **[KMS ref] **; **WORM** / **GFS** for **ransomware** resilience |
- **Last restore test** [date] with **RTO** **met?** [Y/N] and **gaps** [link] |

## Off-site / cross-region / air-gap
- **3-2-1** or **NIST**-aligned: **2** media, **1** off-line if **[requirement] ** from **[insurer/ regulator] ** |
- **DRI** [name] for **BCP/DR** **exercise** in **[Q] ** w/ **executive** **readout** |

## Exclusions and cost guardrails
- **Not backed up** (ephemeral, derived): [list] with **rebuild** SLO; **$ cap** and **approver** for **unbounded** log volume |