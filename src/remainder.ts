class Reminder {
    id: string;
    title: string;
    description: string;
    date: Date;

    constructor(id: string, title: string, description: string, date: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
    }
}

export class ReminderDatabase {
    private reminders: Reminder[] = [];

    createReminder(id: string, title: string, description: string, date: Date): void {
        this.reminders.push(new Reminder(id, title, description, date));
    }

    getAllReminders(): Reminder[] {
        return this.reminders;
    }

    getReminder(id: string): Reminder | null {
        return this.reminders.find(reminder => reminder.id === id) || null;
    }

    removeReminder(id: string): void {
        this.reminders = this.reminders.filter(reminder => reminder.id !== id);
    }
}

// Example usage:
const reminderDB = new ReminderDatabase();
reminderDB.createReminder("1", "Meeting", "Team meeting at 10 AM", new Date("2025-03-11T10:00:00"));
console.log(reminderDB.getAllReminders());
console.log(reminderDB.getReminder("1"));
reminderDB.removeReminder("1");
console.log(reminderDB.getAllReminders());