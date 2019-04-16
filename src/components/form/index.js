import React from 'react';
import Field from './field';

const formFields = [
  {
    children: [
      {
        classes: 'form-group required row col-md-6 col-lg-6 col-xl-6',
        schema: {
          field: {
            classes: 'col-md-12 col-lg-12 col-xl-6',
            name: 'name',
            required: true,
            type: 'text',
          },
          label: {
            classes:
              'col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-4 text-lg-left text-xl-right',
            text: 'Name',
          },
        },
      },
      {
        classes: 'form-group row col-md-6 col-lg-6 col-xl-6',
        schema: {
          field: {
            classes: 'col-md-12 col-lg-12 col-xl-6',
            name: 'type',
            required: true,
            type: 'text',
          },
          label: {
            classes:
              'col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-4 text-lg-left text-xl-right',
            text: 'Type',
          },
        },
      },
    ],
    type: 'form-row',
  },
  {
    children: [
      {
        classes: 'form-group required row col-md-6 col-lg-6 col-xl-6',
        schema: {
          field: {
            classes: 'col-md-12 col-lg-12 col-xl-6',
            name: 'name',
            required: true,
            type: 'text',
          },
          label: {
            classes:
              'col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-4 text-lg-left text-xl-right',
            text: 'Name',
          },
        },
      },
      {
        classes: 'form-group row col-md-6 col-lg-6 col-xl-6',
        schema: {
          field: {
            classes: 'col-md-12 col-lg-12 col-xl-6',
            name: 'type',
            required: true,
            type: 'text',
          },
          label: {
            classes:
              'col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-4 text-lg-left text-xl-right',
            text: 'Type',
          },
        },
      },
    ],
    type: 'form-row',
  },
  {
    children: [
      {
        classes: 'form-group row col-md-12 col-lg-12 col-xl-12',
        schema: {
          field: {
            classes: 'col-md-12 col-lg-12 col-xl-9',
            name: 'name',
            required: true,
            type: 'text',
          },
          label: {
            classes:
              'col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-2 text-lg-left text-xl-right',
            text: 'Name',
          },
        },
      },
    ],
    type: 'form-row',
  },
  {
    children: [
      {
        classes: 'form-group row col-md-12 col-lg-12 col-xl-12',
        schema: {
          field: {
            classes: 'col-md-12 col-lg-12 col-xl-9',
            name: 'name',
            required: true,
            type: 'select',
          },
          label: {
            classes:
              'col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-2 text-lg-left text-xl-right',
            text: 'Name',
          },
        },
      },
    ],
    type: 'form-row',
  },
];

const renderFields = () =>
  formFields.map((section, sectionIndex) => (
    <div key={sectionIndex} className={section.type}>
      {section.children.map((field, fieldIndex) => (
        <Field key={fieldIndex} {...field} />
      ))}
    </div>
  ));

const Form = () => {
  return renderFields();
};

export default Form;
