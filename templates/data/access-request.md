# Data access request (internal workflow) — [Requester] — [date]

| Field | Value |
| --- | --- |
| **Request ID** | [DAR-####] |
| **Requester (role, manager)** | [name] |
| **Data set / app / region** | [id] |
| **Business justification** | [text, min 1 line] |

## Approvals (fill before grant)
- **Data owner** [Y/N, name, date] with **DPIA/PIA** if **sensitive** | **Infosec** for **PAM/ABAC** [Y/N, date] |
- **JML** in **[IdP] ** with **MFA** and **end date** of **access** (must have) |

## Grant & log
- **Group / role** [id] in **[IdP] **; **query** / **row filter** in **[Ranger/Snow] ** w/ **mask** for **[PII] ** if **need-to-know** |
- **Log** in **[SIEM] ** with **ticket** in **[#] ** and **QBR** attestation in **[GRC] ** |

## Re-certification
- **90-day** (or your policy) **re-attest** with **DRI** [name] in **[#] ** or **auto-revoke** in **[d] ** days |

## If denied / partial
- **Rationale (safe for employee file):** [text] w/ **appeal** in **[to DGO] ** in **[+n] ** days |