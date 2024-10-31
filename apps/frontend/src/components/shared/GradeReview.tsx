import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

interface GradeReviewProps {
  grade: number;
  size?: number;
}

function GradeReview({ grade, size }: GradeReviewProps) {
  const StarsGrade = (grade: number) => {
    // console.log(grade);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (grade >= i) {
        stars.push(<TbStarFilled size={size ?? 12} />);
      } else if (grade >= i - 0.5) {
        stars.push(<TbStarHalfFilled size={size ?? 12} />);
      } else {
        stars.push(<TbStar size={size ?? 12} />);
      }
      console.log(stars.length);
    }
    return stars;
  };

  return (
    <div className="flex gap-0.5 text-emerald-400">{StarsGrade(grade)}</div>
  );
}
export default GradeReview;
