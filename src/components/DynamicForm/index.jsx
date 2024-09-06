import React from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  const firstInputValue = watch("firstInputField");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label>First Field</label>
        <input
          type="text"
          {...register("firstInputField", { required: true, minLength: 5 })}
        />
        {errors.firstInputField && (
          <span className={styles.error}>Minimum length is 5 characters!</span>
        )}
      </div>

      {firstInputValue?.length >= 5 && (
        <div className={styles.field}>
          <label>Second Field</label>
          <input
            type="text"
            {...register("secondInputField", { required: true })}
          />
          {errors.secondInputField && (
            <span className={styles.error}>This field is required!</span>
          )}
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
