---
id: sucursales/activar-equipo-en-una-sucursal
title: "Activate the team in a location"
description: "Step by step to choose which barbers and managers work in the location you're in, with the Activate team in this location screen and what you see after Save."
section: sucursales
order: 140
group: "Activate team and catalogs"
roles: [owner, admin]
screens: [/team/activate, /team/barbers]
keywords: [activate team, import team, activate barber, activate team in this location, location, managers, commission, rent, switch, save, team in another location, barber in two locations]
related: [sucursales/equipo-compartido-entre-sucursales, sucursales/no-veo-a-un-barbero-en-mi-sucursal, sucursales/un-barbero-que-trabaja-en-dos-sucursales, equipo/la-lista-de-barberos, equipo/conoce-la-seccion-equipo]
status: review
updated: 2026-09-25
---

# Activate the team in a location

**In short:** in **Team › Actions › Activate team in this location** you choose, with one switch per person, who works in the location you have selected at the top. You tap **Save** and the person shows up in that location's **Barbers** list.

## Before you start

People are created **once** for the whole company and **activated** in each location where they work. **Team** shows only the people activated in the selected location: the test company has 21 commission barbers, and one of its locations shows 10. [The team belongs to the company and is activated in each location](/ayuda/sucursales/equipo-compartido-entre-sucursales) explains it.

## Steps

1. At the top, choose the location where you want to activate the team.
2. Tap **Team** in the menu. The screen says “In this section you can have full control of your team.”
3. Tap **Actions** and choose **Activate team in this location**.
   ![The Team Actions menu with its five options](/assets/es/equipo/conoce-la-seccion-equipo/menu-acciones.png)
4. Read the instruction on the screen: “Select the team you want to import by turning on the switch. Click ‘Save’ once you've made your choices.”
   ![The Activate team in this location screen, with the Barbers and Managers tabs and one switch per person](/assets/es/sucursales/activar-equipo-en-una-sucursal/pantalla.png)
5. Choose the **Barbers** or **Managers** tab. Inside **Barbers** there are two views: **Commission** and **Rent**.
6. Turn on the switch for each person who works in this location. Off = doesn't work here.
7. Tap **Save**.

> [!IMPORTANT]
> If you leave without tapping **Save**, the switches aren't applied.

## After Save

Checked in a test location: when you tap **Save**, the app goes back to **Team** and the person appears in “Barbers list” with their **Name**, **Location**, **Level**, **Email**, **Phone**, the **Active** status and their **Action** menu. If they work in two locations, repeat the steps in the other one ([A barber who works in two locations](/ayuda/sucursales/un-barbero-que-trabaja-en-dos-sucursales)).

A location with no team shows “0 Barbers,” “Here you'll see your team's barbers.” and the **Create commission barber** button.

## What activating doesn't do

- **It doesn't set a schedule.** If they have no shift that day, **Team › Working hours** says “Not working” and the **Calendar** may say “Nobody works this day.” Set their schedule in **Working hours** ([The team's working hours](/ayuda/equipo/horas-de-trabajo-del-equipo)).
- **It doesn't activate their services.** Services are activated separately, in **Services › Actions › Activate services** ([Activate services in a location](/ayuda/sucursales/activar-servicios-en-una-sucursal)).
- **It doesn't create anyone.** Only people who already exist in the company show up. For a new person, **Actions › Create team member**.

## Frequently asked questions

**Does turning off a switch delete the person?**
No. The person stays in the company; what changes is where they work. What happens to their future appointments in that location when you turn it off hasn't been checked yet.

**Why can't I find someone in the list?**
Only people created in your company show up. Also check the tab: managers are under **Managers**, and barbers are split into **Commission** and **Rent**.

**Does an activated barber already show up in the calendar?**
They show up with the **Team\*** filter set to **Whole team**. With **Working**, only if they have a schedule that day ([A barber doesn't show up on the calendar](/ayuda/calendario/un-barbero-no-aparece-en-el-calendario)).
