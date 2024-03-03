import { FormEvent, useState } from "react";
import { LoginForm, schema } from "./schemas";
import { z } from "zod";

export function ZodFormValidation() {
  const [errors, setErrors] = useState<string[]>([]);

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await schema.parseAsync({
        username: formData.get("username"),
        password: formData.get("password"),
      } as LoginForm);
      setErrors([]);
      alert("Success.");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(err.issues.map((n) => n.message));
      } else {
        setErrors(["An unknown error has occured"]);
      }
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900 text-white">
      <form
        onSubmit={submitForm}
        className="flex max-w-96 flex-col items-center gap-y-4"
      >
        <label className="w-full">
          Username
          <input
            className="my-2 w-full rounded-md bg-transparent px-2 leading-8 ring-2 ring-neutral-800"
            type="text"
            name="username"
            autoComplete="off"
          />
        </label>
        <label className="w-full">
          Password
          <input
            className="my-2 w-full rounded-md bg-transparent px-2 leading-8 ring-2 ring-neutral-800"
            type="password"
            name="password"
          />
        </label>
        {errors.map((n, i) => (
          <strong key={i} className="w-full text-left text-xs text-red-400">
            {n}
          </strong>
        ))}
        <button className="w-full rounded-md bg-purple-600 uppercase leading-8 tracking-widest hover:bg-purple-600/80">
          Submit
        </button>
      </form>
    </main>
  );
}
