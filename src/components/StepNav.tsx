import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { useState, useEffect, useRef } from "react";
import StepSettings from "./StepSettings";

const initialSteps = ["Info", "Details", "Other", "Ending"];

const stepIcons: Record<string, JSX.Element> = {
  Info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cd6d1d"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-info-icon lucide-info"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  Details: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#787878"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-sticky-note-icon lucide-sticky-note"
    >
      <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
      <path d="M15 3v4a2 2 0 0 0 2 2h4" />
    </svg>
  ),
  Other: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9d9690"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-info-icon lucide-info"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  Ending: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9d9690"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-circle-check-big-icon lucide-circle-check-big"
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  ),
};

export default function StepNav() {
  const [steps, setSteps] = useState(initialSteps);
  const [activeStep, setActiveStep] = useState("Info");
  const [settingsOpenFor, setSettingsOpenFor] = useState<string | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = steps.indexOf(active.id);
      const newIndex = steps.indexOf(over.id);
      setSteps((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const insertStep = (index: number) => {
    const newStep = `Page ${steps.length + 1}`;
    const updated = [...steps];
    updated.splice(index + 1, 0, newStep);
    setSteps(updated);
  };

  return (
    <div className="bg-white shadow rounded-md p-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={steps} strategy={verticalListSortingStrategy}>
          <div className="flex items-center relative overflow-visible">
            {steps.map((step, index) => (
              <div key={step} className="relative flex items-center group">
                <SortableStep
                  step={step}
                  isActive={step === activeStep}
                  setActiveStep={setActiveStep}
                  settingsOpenFor={settingsOpenFor}
                  setSettingsOpenFor={setSettingsOpenFor}
                />
                {index < steps.length - 1 && (
                  <button
                    onClick={() => insertStep(index)}
                    className="ml-1 mr-2 opacity-0 group-hover:opacity-100 text-bluue-600 bg-white border border-blue-300 rounded-full px-2 py-[1px] transition duration-200 hover:bg-blue-50"
                    title="Insert page"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => setSteps([...steps, `Page ${steps.length + 1}`])}
              className="ml-2 text-sm text-gray-600 hover:text-blue-600"
            >
              + Add Page
            </button>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

function SortableStep({
  step,
  isActive,
  setActiveStep,
  settingsOpenFor,
  setSettingsOpenFor,
}: {
  step: string;
  isActive: boolean;
  setActiveStep: (step: string) => void;
  settingsOpenFor: string | null;
  setSettingsOpenFor: (step: string | null) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: step });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSettingsOpenFor(null);
      }
    }

    if (settingsOpenFor === step) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingsOpenFor, step]);

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div className="flex items-center gap-1">
        <button
          {...attributes}
          {...listeners}
          onClick={() => setActiveStep(step)}
          className={`px-4 py-2 rounded-full border cursor-move shadow-sm flex items-center gap-2 ${
            isActive
              ? "bg-yellow-100 border-yellow-400"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          {stepIcons[step] && <span>{stepIcons[step]}</span>}
          <span>{step}</span>
        </button>
        <button
          onClick={() =>
            setSettingsOpenFor(step === settingsOpenFor ? null : step)
          }
          className="text-gray-500 hover:text-gray-700 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-ellipsis-icon lucide-ellipsis"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>
      {settingsOpenFor === step && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 mt-2 z-50 bg-white border rounded shadow-md w-40"
        >
          <StepSettings onClose={() => setSettingsOpenFor(null)} />
        </div>
      )}
    </div>
  );
}
