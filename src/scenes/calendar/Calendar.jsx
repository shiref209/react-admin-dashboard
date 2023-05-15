import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "../../components/Header";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [titleDialogOpen, setTitleDialogOpen] = useState(false);
  const [deleteEventOpen, setDeleteEventOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [selectedTarget, setSelectedTarget] = useState(null);

  const handleClose = () => {
    setTitleDialogOpen(false);
    setDeleteEventOpen(false);
  };

  const handleSubmit = () => {
    const title = eventTitle;
    const calendarApi = selectedTarget.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selectedTarget.dateStr}-${title}`,
        title,
        start: selectedTarget.startStr,
        end: selectedTarget.endStr,
        allDay: selectedTarget.allDay,
      });
    }
    handleClose();
  };
  const handleInputChange = (event) => {
    setEventTitle(event.target.value);
  };
  const handleDateClick = (selected) => {
    setTitleDialogOpen(true);
    setSelectedTarget(selected);
  };

  const handleEventClick = (selected) => {
    setDeleteEventOpen(true);
    setSelectedTarget(selected);
  };
  const handleDelete = () => {
    selectedTarget.event.remove();
    handleClose();
  };
  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      {/* Title Dialog */}
      <Box>
        <Dialog open={titleDialogOpen} onClose={handleClose}>
          <DialogTitle>Event's Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Enter A Title For Your Event
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Event's Title"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Add Event</Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* Delete Event Dialog */}
      <Box>
        <Dialog
          open={deleteEventOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This will permenantly delete the event from your calendar. Are you
              sure you want to delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="14px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
