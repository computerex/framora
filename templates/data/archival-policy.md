# Archival policy — [retention class] & storage tier

## 1) When data moves to archive
- **Trigger** (age, business close, product EOL) with **ticket** template **[ARCH-#] ** and **DRI** [role] |
- **Index/metadata** (searchable) required: **[fields] **; **PII** **masked** or **tokenized** in **[index] ** |

## 2) Access and rehydration
- **SLO to retrieve** from cold: **[n h] ** with **approver** [role] and **audit** log to **[SIEM] ** |
- **Export** format **[tar/parquet/…] ** with **checksum** and **chain** in **[hash] ** |

## 3) Destruction after legal + fiscal windows
- **Purge** job **[cron id] ** w/ **certificate** of **destruction** for **[vendor] ** if **3rd party** |
- **M&A** **data room** **handling** w/ **redlines** in **[legal] ** for **sensitive** **excerpts** |

## 4) Cost & compliance (footer)
- **$ / TB / month** and **S3 IA/Glacier** (example) with **DRI** in **FinOps** for **tiering** review **[quarterly] ** |