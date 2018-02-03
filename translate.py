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
			output.append(text.lemma_)
		elif text.tag_[:2] == 'VB' and text.dep_ == "ROOT":
			output.append(text.lemma_)
		elif text.dep_ == "dobj" or text.dep_ == "oprd":
			output.append(text.lemma_)

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