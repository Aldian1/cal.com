import classNames from "@calcom/lib/classNames";

export default function Logo({
  small,
  inline = true,
  className,
}: {
  small?: boolean;
  inline?: boolean;
  className?: string;
}) {
  return (
    <h3 className={classNames("logo", inline && "inline", className)}>
      <strong>
        <svg
          className={classNames(
            small ? "h-4 w-auto" : "h-5 w-auto",
            "dark:invert"
          )}
          alt="Cal"
          aria-label="Cal"
        >
          <use href="/cal-logo-word.svg#logo" />
        </svg>
      </strong>
    </h3>
  );
}
