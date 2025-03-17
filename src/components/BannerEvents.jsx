import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { FaChevronRight, FaHome } from "react-icons/fa";

const localizer = momentLocalizer(moment);
const departments = ["Finance", "HR", "IT", "Operations", "Sales"];

export default function EventScheduler() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    department: "Finance",
    start: "",
    end: "",
  });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert("Please fill all fields");
      return;
    }

    const eventToAdd = {
      ...newEvent,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
      id: events.length + 1,
    };

    setEvents([...events, eventToAdd]);
    setNewEvent({ title: "", department: "Finance", start: "", end: "" });
  };

  return (
<>
          {/* Breadcrumbs */}
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <FaHome className="mr-1 text-blue-500" />
            <a href="/" className="hover:underline">Home</a>
            <FaChevronRight className="mx-2 text-gray-400" />
            <span className="text-gray-500">Events</span>
          </div>
    <div className="p-6 max-w-3xl mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Event Management</h2>

      {/* Event Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6 text-gray-900">
        <h3 className="text-xl font-semibold mb-4">Schedule a New Event</h3>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Event Title"
            className="border p-3 rounded-lg w-full"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <select
            className="border p-3 rounded-lg w-full"
            value={newEvent.department}
            onChange={(e) => setNewEvent({ ...newEvent, department: e.target.value })}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <input
            type="datetime-local"
            className="border p-3 rounded-lg w-full"
            value={newEvent.start}
            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
          />
          <input
            type="datetime-local"
            className="border p-3 rounded-lg w-full"
            value={newEvent.end}
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
          />
        </div>
        <button
          onClick={handleAddEvent}
          className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Add Event
        </button>
      </div>

      {/* Events List */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Scheduled Events</h3>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md text-gray-900">
              <h4 className="font-bold text-lg">{event.title}</h4>
              <p className="text-gray-600">{event.department}</p>
              <p className="text-sm text-gray-500">
                {moment(event.start).format("LLLL")} - {moment(event.end).format("LLLL")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="rounded-xl shadow-lg bg-white p-4 text-gray-900">
        <Calendar
          localizer={localizer}
          events={events.map((event) => ({
            ...event,
            title: `${event.title} (${event.department})`,
          }))}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 400 }}
        />
      </div>
    </div>
</>
  );
}
