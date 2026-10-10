import test from 'node:test';
import assert from 'node:assert/strict';
import { ReminderDatabase } from '../src/remainder.js';

test('create, find, and remove a reminder', () => {
  const db = new ReminderDatabase();
  db.createReminder('one', 'Study', 'Review notes', new Date('2026-10-15'));
  assert.equal(db.getReminder('one')?.title, 'Study');
  assert.equal(db.getAllReminders().length, 1);
  db.removeReminder('one');
  assert.equal(db.getReminder('one'), null);
});
test('reject duplicate IDs and invalid dates', () => {
  const db = new ReminderDatabase();
  db.createReminder('one', 'Study', 'Notes', new Date());
  assert.throws(() => db.createReminder('one', 'Other', 'Notes', new Date()), /already exists/);
  assert.throws(() => db.createReminder('two', 'Study', 'Notes', new Date('invalid')), /Invalid/);
});
test('retrieved records cannot mutate stored records', () => {
  const db = new ReminderDatabase();
  db.createReminder('one', 'Study', 'Notes', new Date('2026-10-15'));
  const found = db.getReminder('one')!;
  found.title = 'Changed';
  found.date.setFullYear(2000);
  assert.equal(db.getReminder('one')?.title, 'Study');
  assert.equal(db.getReminder('one')?.date.getUTCFullYear(), 2026);
});
