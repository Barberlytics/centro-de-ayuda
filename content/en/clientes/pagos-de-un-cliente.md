---
id: clientes/pagos-de-un-cliente
title: "A client's payments"
description: "What the Payment methods tab in a client's record shows: their Transactions, the Credit cards, Store and Stripe filters, the From and To range, and each column."
section: clientes
order: 120
group: "A client's record"
roles: [owner, admin]
screens: [/customers/*]
keywords: [client payments, payment methods, client transactions, payment history, how much a client has paid, what they've paid me, charges to a client, credit card, store, Stripe, transaction ID, view details, from to, filter payments by date]
related: [clientes/ver-un-cliente, clientes/citas-de-un-cliente, clientes/indicadores-de-un-cliente, transacciones/como-leer-transacciones, transacciones/ver-el-detalle-de-una-cuenta]
status: draft
updated: 2026-09-25
---

# A client's payments

**In short:** the **Payment methods** tab of the record shows the client's **Transactions**: one row for each payment, with the **Date**, the **Type**, the **Amount** and the **Transaction ID**. At the top you filter by where they paid (**Credit cards**, **Store**, **Stripe**) and by dates (**From**, **To**).

![A client's Payment methods tab: Credit cards, Store and Stripe filters, From and To, and the Transactions table](/assets/es/clientes/pagos-de-un-cliente/pantalla.png)

## How to get there

1. Tap **Clients** in the side menu.
2. In the client's row, tap **Actions** › **View**.
3. Tap the **Payment methods** tab.

## The filters

| Filter | What it does |
|---|---|
| **Credit cards** | Shows only card payments. |
| **Store** | Shows only what was charged at the barbershop. |
| **Stripe** | Shows only the online payments that went through Stripe. |
| **From** and **To** | Narrow the table to a date range. |

## What's in each column

| Column | What it shows |
|---|---|
| **Date** | The day of the payment. |
| **Type** | The payment's status, for example **Paid**. |
| **Amount** | How much they paid in that transaction: “$52,000.00.” |
| **Transaction ID** | The code for that payment. It helps you find it in **Transactions** if there's a question. |
| **Action** | The **View details** button, which opens that transaction. |

> [!NOTE]
> What exactly **View details** shows (whether it's the same screen as [See a bill's details](/ayuda/transacciones/ver-el-detalle-de-una-cuenta) in **Transactions**) is still to be confirmed.

## Frequently asked questions

**Do I see the client's saved cards here?**
No. Although the tab is called **Payment methods**, what it lists are their **Transactions**. The filters only separate them by where they paid.

**How much has this client paid me in total?**
The total is on the **LTV** card in **General information**: see [A client's indicators](/ayuda/clientes/indicadores-de-un-cliente).

**Where do I see all my clients' payments together?**
In **Transactions**, in the side menu. See [How to read Transactions](/ayuda/transacciones/como-leer-transacciones).

**How do I see only last month's?**
Type the first day of the month in **From** and the last day in **To**.
