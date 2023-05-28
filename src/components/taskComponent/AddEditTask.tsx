import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from "@/store/store";
import { tasksActions, getEditTask } from '../../store/taskSlice';
import { v4 as uuidv4 } from 'uuid';
import { Task } from "@/interfaces";

interface MyFormValues {
  title: string;
  date: string;
  Description: string;
  important: boolean;
  completed: boolean;
}

type Props = {
  isEdit?: boolean;
  taskId?: string;
  onClose: () => void;
  onConfirm: () => void;
}

const MyFormSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  date: Yup.string(),
  Description: Yup.string(),
  important: Yup.boolean(),
  completed: Yup.boolean(),
});

const AddEditTask = ({ isEdit, onClose, onConfirm, taskId }: Props) => {
  const editTask :Task | undefined = useAppSelector(getEditTask(taskId));
  console.log("edittaskkk", editTask);

  const dispatch = useAppDispatch();

  return (
    <>
      <section>
        <header className=" space-y-2  sm:px-2 sm:py-2 lg:p-3 xl:px-3 xl:py-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">{isEdit ? 'add task' : 'edit task'}</h2>
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
        </header>
        <Formik
          initialValues={{
           
            title: editTask?.title || '',
            date: editTask?.date || '',
            Description: editTask?.Description || '',
            important: editTask?.important || false,
            completed: editTask?.completed || false
          }}
          onSubmit={(values: MyFormValues) => {
            const newTask = { ...values, id: uuidv4() };
            if (taskId){
              const editTask = {...values ,id : taskId}
              dispatch(tasksActions.editTask(editTask))
              onClose();
            }
            else{
            dispatch(tasksActions.addNewTask(newTask));
            onClose();
            }
          }}
          validationSchema={MyFormSchema}
        >
          {({ values, setFieldValue }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label htmlFor="title" className="block font-medium text-gray-700 mb-2">
                  Title*
                </label>
                <Field
                  name="title"
                  id="title"
                  placeholder="title"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="date" className="block font-medium text-gray-700 mb-2">
                  date
                </label>
                <Field
                  name="date"
                  id="date"
                  type="date"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="Description" className="block font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Field
                  name="Description"
                  id="Description"
                  component="textarea"
                  rows="3"
                  placeholder="Enter your Description"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="important"
                    id="important"
                    checked={values.important === true}
                    onChange={() => setFieldValue("important", true)}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label htmlFor="important" className="ml-2 block text-gray-900">
                    Mark as important
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="completed"
                    id="completed"
                    checked={values.completed === true}
                    onChange={() => setFieldValue("completed", true)}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label htmlFor="completed" className="ml-2 block text-gray-900">
                    Mark as completed
                  </label>
                </div>
              </div>
              <button type="submit" className="bg-violet-700 text-white py-2 px-4 rounded-lg">
                {taskId ? 'edit task' : 'add task'}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
}

export default AddEditTask;
