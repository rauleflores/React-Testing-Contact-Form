import React from "react";
import {
	render,
	fireEvent,
	getByTestId,
	getByLabelText,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import ContactForm from "./components/ContactForm";

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	// unmountComponentAtNode(container);
	// container.remove();
	// container = null;
	document.body.removeChild(container);
	container = null;
});

test("renders App without crashing", () => {
	act(() => {
		render(<App />, container);
	});
});

test("first name input works correctly", () => {
	const user = { firstName: "Raul" };
	const { getByLabelText } = render(<ContactForm />, container);

	const firstName = getByLabelText(/first name*/i);
	expect(firstName).toBeInTheDocument;
	expect(firstName.textContent).toBe("");

	fireEvent.change(firstName, { target: { value: user.firstName } });

	expect(firstName.value).toBe("Raul");
});

test("last name inpput works correctly", () => {
	const user = { lastName: "Flores" };
	const { getByLabelText } = render(<ContactForm />, container);

	const lastName = getByLabelText(/last name*/i);
	expect(lastName).toBeinTheDocument;

	fireEvent.change(lastName, { target: { value: user.lastName } });

	expect(lastName.value).toBe("Flores");
});

// test("error message on first name input works correctly", () => {
// 	const user = { firstName: "Raul" };
// 	const { getByLabelText, getByTestId } = render(
// 		<ContactForm />,
// 		container
// 	);

// 	const firstName = getByLabelText(/first name/i);
// 	expect(firstName).toBeInTheDocument;
// 	expect(firstName.value).toBe("");

// 	fireEvent.change(firstName, { target: { value: user.firstName } });
// 	expect(firstName.value).toBe("Raul");

// 	const error = getByTestId(
// 		"Looks like there was an error: {errors.firstName.type}"
// 	);
// 	expect(error).not.toBeInTheDocument;
// });

// test("onSubmit is called with all fields filled when button is clicked", () => {
// 	const user = {
// 		firstName: "Rau",
// 		lastName: "Flores",
// 		email: "email@email.com",
// 		message: "This message is secret, shhhhh...",
// 	};

// 	const onSubmit = jest.fn();

// 	const { getByLabelText, getByTestId } = render(
// 		<ContactForm onSubmit={onSubmit} />,
// 		container
// 	);

// 	const firstName = getByLabelText(/first name*/i);
// 	expect(firstName).toBeInTheDocument;
// 	fireEvent.change(firstName, { target: { value: user.firstName } });
// 	expect(firstName.value).toBe("Rau");

// 	const lastName = getByLabelText(/last name*/i);
// 	expect(lastName).toBeInTheDocument;
// 	fireEvent.change(lastName, { target: { value: user.lastName } });
// 	expect(lastName.value).toBe("Flores");

// 	const email = getByLabelText(/email*/i);
// 	expect(email).toBeInTheDocument;
// 	fireEvent.change(email, { target: { value: user.email } });
// 	expect(email.value).toBe("email@email.com");

// 	const message = getByLabelText(/message/i);
// 	expect(message).toBeInTheDocument;
// 	fireEvent.change(message, { target: { value: user.message } });
// 	expect(message.value).toBe("This message is secret, shhhhh...");

// 	const submit = getByTestId("submit");
// 	expect(submit).toBeInTheDocument;
// 	act(() => {
// 		submit.dispatchEvent(new MouseEvent("click", { bubbles: true }));
// 		//fireEvent.click(submit);
// 	});
// 	expect(onSubmit).toHaveBeenCalledTimes(1);
// });
