# Purge criteria and runbook — [Dataset]

## Scope (in / out)
- **In scope:** [tables/partitions] with **PK** range or **tenant** = [x] | **Out:** [legal hold, audit sample] in **[exclusion] ** |

## Pre-purge checks (must be green)
- [ ] **Backup** job **[id] ** OK in **[last] ** [n] days | [ ] **No** open **L/hold** in **[#matter] ** | [ ] **Downstream** **replica** / **export** / **S3** **list** in **[checklist] ** |

## Execution & verification
- **Idempotent** **SQL / job** in **[id] ** with **dry-run** on **[date] ** and **rowcount** = [n] (expected) |
- **Post-verify:** `COUNT(*)` and **max(ts)** = **NULL** in **[n]** critical columns |

## Rollback (if error)
- **From backup** **[id] ** only if **< [n] h**; **DRI** [on-call] and **RFO** in **[#inc] ** if **customer** **visible** |

## Approvals and audit trail
- **CAB / DGO** **sign-off** [name] [date] with **ticket** **[#] ** and **GRC** log **[id] ** |