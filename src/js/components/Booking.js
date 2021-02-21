import {select, templates} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import HourPicker from './HourPicker.js';
import DatePicker from './DatePicker.js';

class Booking {
  constructor(element) {
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render(element) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};

    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.peopleAmount = document.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = document.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePicker = document.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = document.querySelector(select.widgets.hourPicker.wrapper);
  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.hourPickerWidget = new HourPicker(thisBooking.dom.hourPicker);
    thisBooking.datePickerWidget = new DatePicker(thisBooking.dom.datePicker);
  }
}

export default Booking;
