---
id: clientes/un-cliente-aparece-duplicado
title: "A client shows up twice or with incomplete details"
description: "Why you might see the same client twice or records with empty details, and what to check before creating another one."
section: clientes
order: 170
group: "If something goes wrong"
roles: [owner, admin, recepcion]
screens: [/customers]
keywords: [duplicate client, same client twice, repeated client, merge clients, combine clients, incomplete details, no email, walk-in]
related: [clientes/buscar-un-cliente, clientes/crear-un-cliente, clientes/perfil-de-un-cliente, transacciones/clientes-walk-in-en-transacciones]
status: draft
updated: 2026-09-25
---

# A client shows up twice or with incomplete details

**In short:** each client is identified by their phone number. If they were created twice with different numbers (or one with a country prefix and the other without it), you'll see two records. Before creating a client, search for them by name or phone number.

## Why it happens

- They were created from **Create client** and also booked online with a different number.
- They were registered with another country's prefix (**+57** versus **+1**).
- They were charged as a **Walk in** (a client with no record) instead of through their own record; those accounts show up as “Walk in” in Transactions.

## What to check

1. Search for the client by name in **Clients** and compare the two records: phone, email, **# Appointments** and **Type**.
   ![The client list's search box](/assets/es/clientes/la-lista-de-clientes/buscador.png)
2. Keep the record with more appointments and details.
3. When booking, always pick that record in **Create appointment › Client**.

> [!NOTE]
> On the screens we reviewed there's no option to merge two records or to delete a client. How to fix a duplicate that's already been created is still to be confirmed with the team.

## Frequently asked questions

**Can I edit a client's details?**
In **Clients › View › Profile** you can see their details; we didn't see an edit button. It's still to be confirmed.

**Why doesn't a record have an email or an address?**
When booking online, the client only gives their phone number. The rest of the details get filled in when you create them from the app.
