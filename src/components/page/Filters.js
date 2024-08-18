"use client";

import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COLORS, DRESS_STYLE, ITEMS, SIZES } from "@/lib/constants";

const accordions = [
  {
    title: "Price",
    content: (
      <Slider
        defaultValue={[33, 40]}
        max={100}
        step={1}
        onValueChange={(value) => console.log(value)}
      />
    ),
  },
  {
    title: "Colors",
    content: (
      <div className="flex flex-wrap gap-4">
        {COLORS.map((color) => (
          <Checkbox
            key={color.id}
            className={`rounded-full w-10 h-10`}
            style={{
              backgroundColor: color?.color,
              borderColor: "rgba(0, 0, 0, 0.2)",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Sizes",
    content: (
      <div className="flex flex-wrap gap-3">
        {SIZES.map((size) => (
          <Button variant="outline" key={size.id} className="rounded-full">
            {size.label}
          </Button>
        ))}
      </div>
    ),
  },
  {
    title: "Dress Styles",
    content: (
      <div className="flex flex-col gap-2">
        {DRESS_STYLE.map((dressStyle) => (
          <div key={dressStyle.id} className="flex justify-between">
            <label
              htmlFor={dressStyle.id}
              className="text-base font-normal text-black/60"
            >
              {dressStyle.label}
            </label>
            <Checkbox
              id={dressStyle.id}
              onCheckedChange={(checked) =>
                handleCheckboxChange(checked, dressStyle.id)
              }
            />
          </div>
        ))}
      </div>
    ),
  },
];

const Filters = () => {
  const handleCheckboxChange = (checked, itemName) => {
    console.log(`Item: ${itemName}, Checked: ${checked}`);
  };
  return (
    <div className="border border-black/10 p-5 rounded-lg">
      <section className="flex flex-col gap-4 pb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <hr />

        <article className="flex flex-col gap-2">
          {ITEMS.map((item) => (
            <div key={item.id} className="flex justify-between">
              <label
                htmlFor={item.id}
                className="text-base font-normal text-black/60"
              >
                {item.label}
              </label>
              <Checkbox
                id={item.id}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(checked, item.id)
                }
              />
            </div>
          ))}
        </article>
      </section>
      <hr />
      <section className="pt-4">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.title}
            type="single"
            collapsible
            defaultValue={accordion.title}
          >
            <AccordionItem value={accordion.title}>
              <AccordionTrigger>
                <h2 className="text-xl font-bold">{accordion.title}</h2>
              </AccordionTrigger>
              <hr />
              <AccordionContent className="py-8">
                {accordion.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </section>
    </div>
  );
};

export default Filters;
