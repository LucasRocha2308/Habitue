import { Container, TextAreaContainer } from "./style";

function TextArea({ error = "", label, icon: Icon, register, name, ...rest }) {
  return (
    <Container>
      <div>
        {label}
        {!!error && <span> - {error}</span>}
      </div>
      <TextAreaContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <textarea rows="5" cols="23" {...register(name)} {...rest} />
      </TextAreaContainer>
    </Container>
  );
}
export default TextArea;
