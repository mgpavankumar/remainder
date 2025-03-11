import { ReminderDatabase } from "./remainder";

const reminderDB = new ReminderDatabase();

// Creating reminders
reminderDB.createReminder("1", "Meeting", "Team meeting at 10 AM", new Date("2025-03-11T10:00:00"));
reminderDB.createReminder("2", "Doctor's Appointment", "Dentist visit at 3 PM", new Date("2025-03-12T15:00:00"));

// Fetching and displaying all reminders
console.log("All Reminders:", reminderDB.getAllReminders());

// Fetching a specific reminder
console.log("Reminder with ID 1:", reminderDB.getReminder("1"));

// Removing a reminder
reminderDB.removeReminder("1");
console.log("All Reminders after deletion:", reminderDB.getAllReminders());