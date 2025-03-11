class Reminder {
    id: string;
    title: string;
    description: string;
    date: Date;
    completed: boolean;

    constructor(id: string, title: string, description: string, date: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.completed = false; // New reminder is initially not completed
    }

    markAsCompleted() {
        this.completed = true;
    }

    unmarkAsCompleted() {
        this.completed = false;
    }
}

class ReminderDatabase {
    private reminders: Map<string, Reminder> = new Map();

    // Creates a reminder and stores it
    createReminder(id: string, title: string, description: string, date: Date): void {
        if (this.exists(id)) {
            throw new Error("Reminder with this ID already exists.");
        }
        const reminder = new Reminder(id, title, description, date);
        this.reminders.set(id, reminder);
    }

    // Checks if a reminder exists by its id
    exists(id: string): boolean {
        return this.reminders.has(id);
    }

    // Marks a reminder as completed
    markReminderAsCompleted(id: string): void {
        const reminder = this.reminders.get(id);
        if (reminder) {
            reminder.markAsCompleted();
        } else {
            throw new Error("Reminder not found.");
        }
    }

    // Unmarks a reminder as completed
    unmarkReminderAsCompleted(id: string): void {
        const reminder = this.reminders.get(id);
        if (reminder) {
            reminder.unmarkAsCompleted();
        } else {
            throw new Error("Reminder not found.");
        }
    }

    // Returns all reminders stored
    getAllReminders(): Reminder[] {
        return Array.from(this.reminders.values());
    }

    // Returns a specific reminder based on its id, or null if not found
    getReminder(id: string): Reminder | null {
        return this.reminders.get(id) || null;
    }

    // Returns all reminders marked as completed
    getAllRemindersMarkedAsCompleted(): Reminder[] {
        return Array.from(this.reminders.values()).filter(reminder => reminder.completed);
    }

    // Returns all reminders not marked as completed
    getAllRemindersNotMarkedAsCompleted(): Reminder[] {
        return Array.from(this.reminders.values()).filter(reminder => !reminder.completed);
    }

    // Returns all reminders due by today
    getAllRemindersDueByToday(): Reminder[] {
        const today = new Date();
        return Array.from(this.reminders.values()).filter(reminder => reminder.date <= today && !reminder.completed);
    }

    // Updates a given reminder based on its id
    updateReminder(id: string, title?: string, description?: string, date?: Date): void {
        const reminder = this.reminders.get(id);
        if (!reminder) {
            throw new Error("Reminder not found.");
        }
        if (title) reminder.title = title;
        if (description) reminder.description = description;
        if (date) reminder.date = date;
    }

    // Removes a reminder by its id
    removeReminder(id: string): void {
        if (!this.reminders.has(id)) {
            throw new Error("Reminder not found.");
        }
        this.reminders.delete(id);
    }
}

// Example usage:
const reminderDB = new ReminderDatabase();

// Creating reminders
reminderDB.createReminder("1", "Doctor's Appointment", "Visit the doctor at 3 PM", new Date("2025-03-11T15:00:00"));
reminderDB.createReminder("2", "Meeting", "Team meeting at 10 AM", new Date("2025-03-12T10:00:00"));

// Marking reminder as completed
reminderDB.markReminderAsCompleted("1");

// Get all reminders
console.log(reminderDB.getAllReminders());

// Get reminders marked as completed
console.log(reminderDB.getAllRemindersMarkedAsCompleted());

// Get reminders due by today
console.log(reminderDB.getAllRemindersDueByToday());

// Updating a reminder
reminderDB.updateReminder("2", "Updated Meeting", "Updated description for team meeting", new Date("2025-03-13T10:00:00"));
console.log(reminderDB.getReminder("2"));

// Removing a reminder
reminderDB.removeReminder("1");
console.log(reminderDB.getAllReminders());

