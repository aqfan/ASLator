import spacy
nlp = spacy.load('en')

WORD_ORDER = ["SUB", "IO", "DO", "VERB"]

def translate(sentence):
	parsed_text = nlp(sentence)
	# print(parsed_text)
	subject = ''
	indirect_object = ''
	direct_object = ''

	output = []

	#get token dependencies
	for text in parsed_text:
		# text = text.lemma_
		print(text)
		print("Tag: " + text.tag_)
		print("Dep: " + text.dep_)
		if text.dep_ == 'nsubj':
			output.append(text)
		elif text.tag_[:2] == 'VB':
			output.append(text)
		elif text.dep_ == "dobj":
			output.append(text)

	# for el in WORD_ORDER:
	# 	if 
	print(output)
	return output
	# print(subject)
	# print(direct_object)
	# print(indirect_object)

if __name__ == '__main__':
    from sys import argv
    translate(argv[1])