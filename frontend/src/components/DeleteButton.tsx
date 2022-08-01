interface DeleteButtonProps {
  url: string;
  children?: any;
}

export default function DeleteButton(props: DeleteButtonProps) {
  const onClickDelete = () => {
    fetch(props.url, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => response.json());

    window.location.reload();
  };

  return (
    <button
      type="button"
      className={`
        text-white bg-red-400 hover:bg-red-600
        focus:outline-none focus:ring-4 focus:ring-red-300
        font-medium rounded-full text-sm px-5 py-2.5 text-center
    `}
      onClick={onClickDelete}
    >
      {props.children}
    </button>
  );
}
