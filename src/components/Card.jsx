const Card = (props) => {
  return (
    <div className="w-full h-40 bg-white flex flex-col rounded-md ">
      <div className="flex justify-between m-7 mx-10">
        <span className="text-2xl">{props.type}</span>
        <span className={props.color}>{props.icon}</span>
      </div>
      <div className="flex justify-center">
        <span className="text-3xl font-semibold">R$ {props.amount}</span>
      </div>
    </div>
  );
};

export default Card;
