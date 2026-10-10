export class Reminder {
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
        if (!id.trim() || !title.trim() || !description.trim() || !Number.isFinite(date.getTime())) {
            throw new Error("Invalid reminder details.");
        }
        if (this.reminders.some(reminder => reminder.id === id)) {
            throw new Error("Reminder ID already exists.");
        }
        this.reminders.push(new Reminder(id, title, description, new Date(date)));
    }

    getAllReminders(): Reminder[] {
        return this.reminders.map(reminder => ({ ...reminder, date: new Date(reminder.date) }));
    }

    getReminder(id: string): Reminder | null {
        return this.getAllReminders().find(reminder => reminder.id === id) || null;
    }

    removeReminder(id: string): void {
        this.reminders = this.reminders.filter(reminder => reminder.id !== id);
    }
}
