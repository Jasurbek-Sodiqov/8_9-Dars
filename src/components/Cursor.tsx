import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Cursor() {
  const [characters, updateCharacters] = useState<any>([
    {
      id: "0",
      name: "",
      thumb: "",
    },
    {
      id: "1",
      name: "",
      thumb: "",
    },
  ]);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  function hendl() {
    const newId = characters.length + 1 + "";
    updateCharacters((props: any) => [
      ...props,
      { id: newId, name: "", thumb: "" },
    ]);
  }

  function nom(id: any, event: React.ChangeEvent<HTMLInputElement>) {
    const yozuv = characters.map((dt: any) => {
      if (dt.id === id) {
        return {
          ...dt,
          name: event.target.value,
        };
      } else {
        return dt;
      }
    });
    updateCharacters(yozuv);
  }

  function key(id: any, event: React.ChangeEvent<HTMLInputElement>) {
    const yozuv = characters.map((dt: any) => {
      if (dt.id === id) {
        return {
          ...dt,
          thumb: event.target.value,
        };
      } else {
        return dt;
      }
    });
    updateCharacters(yozuv);
  }

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided: any) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map((d: any, index: any) => {
                  return (
                    <Draggable key={d.id} draggableId={d.id} index={index}>
                      {(provided: any) => (
                        <li
                          className="flex items-center"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="flex flex-col gap-1">
                            <div className="h-[2px] w-6 bg-black"></div>
                            <div className="h-[2px] w-6 bg-black"></div>
                            <div className="h-[2px] w-6 bg-black"></div>
                          </div>
                          <div className="flex p-6 gap-4 flex-wrap">
                            <div className="flex flex-col">
                              <label className="lebl" htmlFor="us">
                                Ustun nomi
                              </label>
                              <input
                                className="h-12 px-4 w-[628px] mt-3"
                                onChange={(e) => nom(d.id, e)}
                                type="text"
                                value={d.name}
                                placeholder="Ustun nomi"
                              />
                            </div>
                            <div className="flex flex-col">
                              <label className="lebl" htmlFor="us">
                                Key
                              </label>
                              <input
                                className="h-12 px-4 w-[628px] mt-3"
                                value={d.thumb}
                                onChange={(e) => key(d.id, e)}
                                type="text"
                                placeholder="Key"
                              />
                            </div>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>

      <div className="flex justify-between pr-10 ">
        <button className="qosh" onClick={hendl}>
          <span className="border-2 px-1 rounded-lg border-[#0062FF]">+</span>{" "}
          Ustun qo'shish
        </button>
        <button
          onClick={() => console.log(characters)}
          className="px-3 py-2 bg-slate-400 rounded-md text-white hover:bg-slate-500"
        >
          Jo'natish
        </button>
      </div>
    </div>
  );
}

export default Cursor;
